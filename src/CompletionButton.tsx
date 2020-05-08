import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { IAnimation, ICompletionButtonView } from './types'

const width = Dimensions.get('window').width

interface IProps extends ICompletionButtonView {
  animation: IAnimation
}

const CompletionButton = (props: IProps) => {
  const animated = new Animated.Value(props.animation.name !== 'none' ? 0 : 1)

  useEffect(() => {
    if (props.animation.name !== 'none') {
      Animated.timing(animated, {
        toValue: 1,
        duration: props.animation.duration,
        delay: props.animation.delay,
        useNativeDriver: true,
      }).start()
    }
  }, [])

  let transform: number | Animated.AnimatedInterpolation = 0
  let outputRange: number | number[]
  let isXTransform = false

  switch (props.animation.name) {
    case 'slide-up':
      outputRange = [30, 0]
      break
    case 'slide-down':
      outputRange = [-30, 0]
      break
    case 'slide-right':
      outputRange = [-width, 0]
      isXTransform = true
      break
    case 'slide-left':
        outputRange = [width, 0]
        isXTransform = true
        break
    default:
      outputRange = 0
  }

  if (outputRange !== 0) {
    transform = animated.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange as number[],
    })
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: animated,
          transform: [
            isXTransform ? {
              translateX: transform,
            } : {
              translateY: transform,
            },
          ],
        },
     ]}
    >
      <TouchableOpacity
        style={[styles.button, { backgroundColor: props.background, borderRadius: props.radius }]}
        onPress={props.handler}
      >
        <Text style={[styles.title, { fontSize: props.size, color: props.color }]}>{props.text}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default CompletionButton

CompletionButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  background: PropTypes.string,
  radius: PropTypes.number,
  handler: PropTypes.func,
  animation: PropTypes.shape({
    name: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
  }),
}

CompletionButton.defaultProps = {
  color: 'black',
  radius: 14,
  size: 17,
  background: 'black',
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 14,
    paddingVertical: 15,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
  },
})

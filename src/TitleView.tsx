import React, { useEffect } from 'react'
import { StyleSheet, View, Animated, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { ITextView, IAnimation } from './types'
import { margin, padding } from './helpers'

const width = Dimensions.get('window').width

interface IProps extends ITextView {
  animation: IAnimation
}

const TitleView = (props: IProps) => {
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
    <View style={[styles.container, {
      ...margin(props.margin),
      ...padding(props.padding),
    }]}>
      <Animated.Text
        style={[
          {
            fontSize: props.size,
            color: props.color,
            fontWeight: props.weight,
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
        {props.text}
      </Animated.Text>
    </View>
  )
}

export default TitleView

TitleView.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.string,
  animation: PropTypes.shape({
    name: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
  }),
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  padding: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
}

TitleView.defaultProps = {
  color: 'black',
  size: 35,
  weight: '600',
  margin: {
    top: 15,
  },
  padding: {},
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

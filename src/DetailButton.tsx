import React, { useEffect } from 'react'
import { StyleSheet, Text, Animated, TouchableOpacity, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { IButton, IAnimation } from './types'
import { margin, padding } from './helpers'
import { textPropTypes, layoutPropTypes, animationPropTypes } from './propTypes'

const width = Dimensions.get('window').width

interface IProps extends IButton {
  animation: IAnimation
}

const DetailButton = (props: IProps) => {
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
        {
          ...margin(props.margin),
          ...padding(props.padding),
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
        onPress={props.handler}
      >
        <Text style={[
          styles.title,
          {
            fontSize: props.size,
            color: props.color,
            fontWeight: props.weight,
          },
        ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default DetailButton

DetailButton.propTypes = {
  ...textPropTypes,
  ...layoutPropTypes,
  ...animationPropTypes,
  handler: PropTypes.func,
}

DetailButton.defaultProps = {
  color: 'black',
  size: 17,
  weight: 'normal',
  magin: {
    top: 10,
  },
  padding: {},
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
})

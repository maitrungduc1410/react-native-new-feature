import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { ITextView } from './types'
import { margin, padding } from './helpers'
import { textPropTypes, layoutPropTypes } from './propTypes'

interface IProps extends ITextView {
  contentAlignment: 'left' | 'center',
}

const ItemViewSubtitle = (props: IProps) => {
  return (
    <Text style={[
      {
        ...margin(props.margin),
        ...padding(props.padding),
        fontSize: props.size,
        color: props.color,
        fontWeight: props.weight,
        textAlign: props.contentAlignment === 'center' ? 'center' : 'left',
      },
    ]}>
      {props.text}
    </Text>
  )
}

export default ItemViewSubtitle

ItemViewSubtitle.propTypes = {
  ...textPropTypes,
  ...layoutPropTypes,
  contentAlignment: PropTypes.oneOf(['left', 'center']),
}

ItemViewSubtitle.defaultProps = {
  color: 'black',
  size: 15,
  weight: 'normal',
  contentAlignment: 'left',
  margin: {
    top: 5,
  },
  padding: {},
}

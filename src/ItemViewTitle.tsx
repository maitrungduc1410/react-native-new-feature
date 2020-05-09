import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { ITextView } from './types'
import { margin, padding } from './helpers'
import { textPropTypes, layoutPropTypes } from './propTypes'

interface IProps extends ITextView {
  contentAlignment: 'left' | 'center'
}

const ItemViewTitle = (props: IProps) => {
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

export default ItemViewTitle

ItemViewTitle.propTypes = {
  ...textPropTypes,
  ...layoutPropTypes,
  contentAlignment: PropTypes.oneOf(['left', 'center']),
}

ItemViewTitle.defaultProps = {
  contentAlignment: 'left',
  color: 'black',
  size: 17,
  weight: '600',
  margin: {},
  padding: {},
}

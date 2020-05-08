import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ITextView } from './types'

interface IProps extends ITextView {
  contentAlignment: 'left' | 'center'
}

const ItemViewTitle = (props: IProps) => {
  return (
    <Text style={[
      styles.container,
        {
          fontSize: props.size,
          color: props.color,
          textAlign: props.contentAlignment === 'center' ? 'center' : 'left',
        },
      ]}
    >
      {props.text}
    </Text>
  )
}

export default ItemViewTitle

ItemViewTitle.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  contentAlignment: PropTypes.oneOf(['left', 'center']),
}

ItemViewTitle.defaultProps = {
  contentAlignment: 'left',
  color: 'black',
  size: 17,
}

const styles = StyleSheet.create({
  container: {
    fontWeight: '600',
  },
})

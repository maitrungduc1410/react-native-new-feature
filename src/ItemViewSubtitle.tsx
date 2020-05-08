import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ITextView } from './types'

interface IProps extends ITextView {
  contentAlignment: 'left' | 'center'
}

const ItemViewSubtitle = (props: IProps) => {
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

export default ItemViewSubtitle

ItemViewSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  contentAlignment: PropTypes.oneOf(['left', 'center']),
}

ItemViewSubtitle.defaultProps = {
  color: 'black',
  size: 15,
  contentAlignment: 'left',
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
})

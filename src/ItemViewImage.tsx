import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { IItemViewImage } from './types'

const ItemViewImage = (props: IItemViewImage) => {
  return (
    <View style={[styles.container, { width: props.size, height: props.size }]}>
      {props.component}
    </View>
  )
}

export default ItemViewImage

ItemViewImage.propTypes = {
  component: PropTypes.node.isRequired,
  size: PropTypes.number,
}

ItemViewImage.defaultProps = {
  size: 45,
}

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

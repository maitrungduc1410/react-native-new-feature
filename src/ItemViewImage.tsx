import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { IItemViewImage } from './types'
import { margin, padding } from './helpers'

const ItemViewImage = (props: IItemViewImage) => {
  return (
    <View style={[
      styles.container,
      {
        ...margin(props.margin),
        ...padding(props.padding),
      },
    ]}>
      {props.component}
    </View>
  )
}

export default ItemViewImage

ItemViewImage.propTypes = {
  component: PropTypes.node.isRequired,
  size: PropTypes.number,
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

ItemViewImage.defaultProps = {
  size: 45,
  margin: {
    right: 15,
  },
  padding: {},
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

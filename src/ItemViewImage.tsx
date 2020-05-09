import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { IItemViewImage } from './types'
import { margin, padding } from './helpers'
import { layoutPropTypes } from './propTypes'

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
  ...layoutPropTypes,
}

ItemViewImage.defaultProps = {
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

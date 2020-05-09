import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ItemView from './ItemView'
import constants from './constants'
import PropTypes from 'prop-types'
import { IItemView, IAnimation } from './types'
import { animationPropTypes, itemViewPropTypes } from './propTypes'

interface IProps {
  animation: IAnimation,
  items: IItemView[]
  contentAlignment: 'left' | 'center'
}

const ListItemView = (props: IProps) => {
  const renderItems = props.items.map((item: IItemView, index: number) => (
    <ItemView
      {...item}
      key={`item-view-${index}`}
      animation={{
        name: props.animation.name,
        delay: (props.animation.delay as number) + constants.ITEM_VIEW_ANIMATION_DELAY * (index + 1), // plus 1 here to delay after the TitleView
        duration: props.animation.duration,
      }}
      contentAlignment={props.contentAlignment}
    />
  ))
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {renderItems}
    </ScrollView>
  )
}

export default ListItemView

ListItemView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    ...itemViewPropTypes,
  })).isRequired,
  ...animationPropTypes,
  contentAlignment: PropTypes.oneOf(['left', 'center']),
}

ListItemView.defaultProps = {
  color: 'black',
  contentAlignment: 'left',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 30,
  },
})

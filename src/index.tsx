import React from 'react'
import { StyleSheet, SafeAreaView, Modal } from 'react-native'
import TitleView from './TitleView'
import ListItemView from './ListItemView'
import DetailButton from './DetailButton'
import CompletionButton from './CompletionButton'
import constants from './constants'
import PropTypes from 'prop-types'
import { ITextView, IButton, ICompletionButtonView, IItemView } from './types'

interface IProps {
  visible: boolean,
  contentAlignment: 'left' | 'center',
  background?: string,
  animation: 'none' | 'fade' | 'slide-up' | 'slide-down' | 'slide-right'| 'slide-left',
  appearAnimation: 'none' | 'fade' | 'slide',
  title: ITextView,
  detailButton?: IButton,
  completionButton: ICompletionButtonView,
  items: IItemView[]
}

const WhatsNew = (props: IProps) => {
  return (
    <Modal
      visible={props.visible}
      animationType={props.appearAnimation}
      presentationStyle={'fullScreen'}
      supportedOrientations={['portrait', 'landscape']}
    >
      <SafeAreaView style={[
        styles.container,
        {
          backgroundColor: props.background,
        }]}
      >
        <TitleView
          animation={{
            name: props.animation,
            duration: constants.FADE_DURATION,
            delay: constants.APPEAR_DURATION + constants.TITLE_VIEW_ANIMATION_DURATION,
          }}
          {...props.title}
        />
        <ListItemView
          animation={{
            name: props.animation,
            duration: constants.FADE_DURATION,
            delay: constants.APPEAR_DURATION + constants.TITLE_VIEW_ANIMATION_DURATION,
          }}
          items={props.items}
          contentAlignment={props.contentAlignment}
        />

        {
          props.detailButton && (
            <DetailButton
              animation={{
                name: props.animation,
                duration: constants.FADE_DURATION,
                delay: constants.APPEAR_DURATION + constants.TITLE_VIEW_ANIMATION_DURATION * 2 + props.items.length * constants.ITEM_VIEW_ANIMATION_DELAY,
              }}
              {...props.detailButton}
            />
          )
        }

        <CompletionButton
          animation={{
            name: props.animation,
            duration: constants.FADE_DURATION,
            delay: constants.APPEAR_DURATION + constants.TITLE_VIEW_ANIMATION_DURATION * 3 + props.items.length * constants.ITEM_VIEW_ANIMATION_DELAY,
          }}
          {...props.completionButton}
        />
      </SafeAreaView>
    </Modal>
  )
}

export default WhatsNew

WhatsNew.propTypes = {
  visible: PropTypes.bool.isRequired,
  contentAlignment: PropTypes.oneOf(['left', 'center']),
  background: PropTypes.string,
  animation: PropTypes.oneOf(['none', 'fade', 'slide-up', 'slide-down', 'slide-right', 'slide-left']),
  appearAnimation: PropTypes.oneOf(['none', 'fade', 'slide']),
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
  }),
  items: PropTypes.array.isRequired,
  detailButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    handler: PropTypes.func,
  }),
  completionButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    background: PropTypes.string,
    handler: PropTypes.func,
  }),
}

WhatsNew.defaultProps = {
  contentAlignment: 'left',
  background: 'white',
  animation: 'none',
  appearAnimation: 'none',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 9999,
  },
})

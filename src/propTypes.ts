import PropTypes from 'prop-types'
import constants from './constants'

export const textPropTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.string,
}

export const layoutPropTypes = {
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

export const animationPropTypes = {
  animation: PropTypes.shape({
    name: PropTypes.oneOf(constants.ANIMATIONS).isRequired,
    duration: PropTypes.number.isRequired,
    delay: PropTypes.number.isRequired,
  }).isRequired,
}

export const itemViewPropTypes = {
  title: PropTypes.shape({
    ...textPropTypes,
    ...layoutPropTypes,
  }),
  subtitle: PropTypes.shape({
    ...textPropTypes,
    ...layoutPropTypes,
  }),
  image: PropTypes.shape({
    component: PropTypes.node.isRequired,
    ...layoutPropTypes,
  })
}
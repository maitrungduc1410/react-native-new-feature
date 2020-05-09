import { TLayoutItem } from './types'

const getShortHand = (style: 'margin' |'padding', offset?: TLayoutItem) => {
  const css: any = {}

  if (offset) {
    // tslint:disable-next-line: forin
    for (const key in offset) {
      css[style + key.charAt(0).toUpperCase() + key.slice(1)] = offset[key as 'top' | 'bottom' | 'right' | 'left']
    }
  }

  return css
}

export const padding = (offset?: TLayoutItem) => getShortHand('padding', offset)
export const margin = (offset?: TLayoutItem) => getShortHand('margin', offset)

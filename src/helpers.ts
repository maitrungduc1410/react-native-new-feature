import { IOffsetable } from './types'

const getShortHand = (style: 'margin' |'padding', offset: IOffsetable) => {
  const css: any = {}

  // tslint:disable-next-line: forin
  for (const key in offset) {
    css[style + key.charAt(0).toUpperCase() + key.slice(1)] = offset[key as 'top' | 'bottom' | 'right' | 'left']
  }

  return css
}

export const padding = (offset: IOffsetable) => getShortHand('padding', offset)
export const margin = (offset: IOffsetable) => getShortHand('margin', offset)

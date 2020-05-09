export type TLayoutItem = {
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
}

export type TLayoutProps = {
  margin?: TLayoutItem,
  padding?: TLayoutItem,
}

export type TTextProps = {
  text: string,
  color?: string,
  size?: number,
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
}

export interface ITextView extends TTextProps, TLayoutProps {}

export interface IButton extends ITextView {
  handler?: () => void
}

export interface ICompletionButtonView extends IButton {
  background?: string,
  radius?: number
}

export interface IItemViewImage extends TLayoutProps {
  component: JSX.Element,
}

export interface IItemView {
  title: ITextView,
  subtitle: ITextView,
  image: IItemViewImage
}

export interface IAnimation {
  name: string,
  delay: number,
  duration: number
}

export type TListAnimation = 'none' | 'fade' | 'slide-up' | 'slide-down' | 'slide-right'| 'slide-left'
export type TAppearAnimation = 'none' | 'fade' | 'slide'
export type TFontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

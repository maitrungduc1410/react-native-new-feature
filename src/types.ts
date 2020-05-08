export interface IOffsetable {
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
}

export interface ITextView {
  text: string,
  color: string,
  size: number,
  weight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  margin: IOffsetable,
  padding: IOffsetable,
}

export interface IButton extends ITextView {
  handler?: () => void
}

export interface ICompletionButtonView extends IButton {
  background?: string,
  radius?: number
}

export interface IItemViewImage {
  component: JSX.Element,
  margin: IOffsetable,
  padding: IOffsetable
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

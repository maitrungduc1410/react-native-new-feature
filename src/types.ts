export interface ITextView {
  text: string,
  color: string,
  size: number
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
  size?: number
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

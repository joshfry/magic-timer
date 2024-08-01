import { baseFontSize } from './constants'

const pxToRem = (size: number) => `${size / baseFontSize}rem`

export default pxToRem

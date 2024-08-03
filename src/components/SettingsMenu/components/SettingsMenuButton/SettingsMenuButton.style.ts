import { styled } from 'styled-components'
import type { Props } from './SettingsMenuButton'

const StyledSettingsMenuButton = styled('button')<Partial<Props>>`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateX(50%) translateY(-50%);
  width: 7vw;
  height: 7vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #111;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 0 1.25vw #111;
  z-index: 999;

  span {
    font-size: 4vw;
    line-height: 0.5;
  }
`

export default StyledSettingsMenuButton

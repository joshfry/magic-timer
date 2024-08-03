import { styled } from 'styled-components'
import type { Props } from './SettingsMenu'

const StyledSettingsMenu = styled('div')<Partial<Props>>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 9999;
`

export default StyledSettingsMenu

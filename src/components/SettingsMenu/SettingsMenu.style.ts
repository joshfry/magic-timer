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

  input {
    display: none;
  }

  label {
    margin: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 10vw;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    background-color: #666;
    border-radius: 4px;
    cursor: pointer;
  }

  input:checked + label {
    color: #111;
    background-color: #fff;
  }
`

export default StyledSettingsMenu

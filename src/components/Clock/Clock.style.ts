import { styled } from 'styled-components'
import type { Props } from './Clock'

const StyledClock = styled('div')<Partial<Props>>`
  display: flex;
  flex-direction: column;
  width: 100%;

  .button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    color: ${({ $isActive }) => ($isActive ? '#111' : '#fff')};
    background-color: ${({ $isActive }) => ($isActive ? '#fff' : '#666')};
    border-radius: 1.25vw;
  }

  .title {
    font-size: 2.25vw;
    margin-bottom: 0.25rem;
  }

  .timer {
    font-size: 10vw;
    font-weight: 700;
    font-optical-sizing: auto;
    font-style: normal;
    line-height: 1;
  }
`

export default StyledClock

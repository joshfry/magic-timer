import { styled } from 'styled-components'

const StyledApp = styled('div')`
  padding: 1.25vw;
  grid-gap: 1.25vw;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  color: #fff;
  width: (100vh - 2.5vw);
  height: calc(100vh - 2.5vw);
  background-color: #111;

  .clock {
    display: flex;
  }

  .clock__button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #666;
    border-radius: 1.25vw;
  }

  .player {
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

  .center {
  }
`

export default StyledApp

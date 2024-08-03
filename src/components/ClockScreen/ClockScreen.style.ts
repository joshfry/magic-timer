import { styled } from 'styled-components'
import type { Props } from './ClockScreen'

const StyledClockScreen = styled('div')<Partial<Props>>`
  .layout {
    display: grid;

    padding: 1.25vw;
    grid-gap: 1.25vw;

    color: #fff;
    width: calc(100vw - 2.5vw);
    height: calc(100vh - 2.5vw);
    background-color: #111;

    /* Orientation */

    &--4p {
      grid-template:
        'a b'
        'c d';

      #clock-1 {
        grid-area: c;
      }
      #clock-2 {
        transform: scale(-1, -1);
        grid-area: a;
      }
      #clock-3 {
        transform: scale(-1, -1);
        grid-area: b;
      }
      #clock-4 {
        grid-area: d;
      }
    }

    &--3p {
      grid-template:
        'a b'
        'a c';

      #clock-1 {
        grid-area: a;

        .button-content {
          transform: rotate(90deg);
        }
      }
      #clock-2 {
        transform: scale(-1, -1);
        grid-area: b;
      }
      #clock-3 {
        grid-area: c;
      }
    }

    &--2p {
      grid-template:
        'a a'
        'b b';

      #clock-1 {
        grid-area: b;
      }
      #clock-2 {
        grid-area: a;
        transform: scale(-1, -1);
      }
    }
  }
`

export default StyledClockScreen

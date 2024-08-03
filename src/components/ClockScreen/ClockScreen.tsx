import { useContext } from 'react'
import { AppContext, AppContextType } from 'components/App'
import Clock from 'components/Clock/Clock'
import StyledClockScreen from './ClockScreen.style'

export interface Props {
  className?: string
}

const ClockScreen = ({ className = '' }: Props) => {
  const state = useContext(AppContext) as AppContextType
  const players = Array.from(Array(state.numPlayers).keys())

  return (
    <StyledClockScreen className={className}>
      <div className={`layout layout--${state.numPlayers}p`}>
        {players.map((val, index) => (
          <Clock key={val} id={`${index + 1}`} />
        ))}
      </div>
    </StyledClockScreen>
  )
}

export default ClockScreen

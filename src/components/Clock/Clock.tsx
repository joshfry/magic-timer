import { useContext, useState, useEffect, useRef } from 'react'
import { AppContext, AppContextType } from 'components/App'
import StyledClock from './Clock.style'

export interface Props {
  id: string
  className?: string
  $isActive?: boolean
}

const Clock = ({ className = '', id }: Props) => {
  const state = useContext(AppContext) as AppContextType
  const [isActive, setIsActive] = useState(false)
  const [timer, setTimer] = useState(state.time)
  const [start, setStart] = useState(false)
  const firstStart = useRef(true)
  const tick = useRef() // <-- React ref

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current
      return
    }

    if (start) {
      // @ts-ignore
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1)
      }, 1000)
    } else {
      clearInterval(tick.current)
    }

    return () => clearInterval(tick.current)
  }, [start])

  const handleClick = () => {
    setStart(!start)
    setIsActive(!isActive)
  }

  return (
    <StyledClock className={className} id={`clock-${id}`} $isActive={isActive}>
      <button className="button" tabIndex={+id} onClick={handleClick}>
        <div className="button-content">
          <div className="title">Player {id}</div>
          <div className="timer">
            {`${~~(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`}
          </div>
        </div>
      </button>
    </StyledClock>
  )
}

export default Clock

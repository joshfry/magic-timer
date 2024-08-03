import React from 'react'
import StyledClock from './Clock.style'

export interface Props {
  id: string
  className?: string
}

const Clock = ({ className = '', id }: Props) => {
  return (
    <StyledClock className={className} id={`clock-${id}`}>
      <button className="button" tabIndex={+id}>
        <div className="button-content">
          <div className="title">Player {id}</div>
          <div className="timer">29:59</div>
        </div>
      </button>
    </StyledClock>
  )
}

export default Clock

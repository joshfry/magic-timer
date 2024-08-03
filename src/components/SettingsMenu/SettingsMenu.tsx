import { useContext } from 'react'
import { AppContext, AppContextType } from 'components/App'
import StyledSettingsMenu from './SettingsMenu.style'

export interface Props {
  className?: string
  $isOpen?: boolean
}

const SettingsMenu = ({ className = '' }: Props) => {
  const state = useContext(AppContext) as AppContextType

  const handlePause = () => {
    state.setIsPaused(!state.isPaused)
  }

  const handleClose = () => {
    state.setIsSettingsMenuOpen(false)
  }

  return (
    <StyledSettingsMenu
      className={className}
      $isOpen={state.isSettingsMenuOpen}
    >
      <div style={{ margin: '1rem 0' }}>
        <h1 style={{ margin: '0 1rem 0.5rem 0' }}>Players</h1>
        <div style={{ display: 'flex' }}>
          <input
            type="radio"
            id="playerChoice2"
            name="playerChoice"
            value="2"
            checked={state.numPlayers === 2}
            onChange={(e) => state.setNumPlayers(parseInt(e.target.value))}
          />
          <label htmlFor="playerChoice2">2</label>
          <input
            type="radio"
            id="playerChoice3"
            name="playerChoice"
            value="3"
            checked={state.numPlayers === 3}
            onChange={(e) => state.setNumPlayers(parseInt(e.target.value))}
          />
          <label htmlFor="playerChoice3">3</label>
          <input
            type="radio"
            id="playerChoice4"
            name="playerChoice"
            value="4"
            checked={state.numPlayers === 4}
            onChange={(e) => state.setNumPlayers(parseInt(e.target.value))}
          />
          <label htmlFor="playerChoice4">4</label>
        </div>
      </div>
      <button
        style={{ margin: '1rem 0', padding: '1rem' }}
        onClick={handlePause}
      >
        {state.isPaused ? 'Start' : 'Pause'}
      </button>
      <button
        style={{ margin: '1rem 0', padding: '1rem' }}
        onClick={handleClose}
      >
        Close
      </button>
    </StyledSettingsMenu>
  )
}

export default SettingsMenu

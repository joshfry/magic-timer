import { useContext } from 'react'
import { AppContext, AppContextType } from 'components/App'
import StyledSettingsMenu from './SettingsMenu.style'

export interface Props {
  className?: string
  $isOpen?: boolean
}

const SettingsMenu = ({ className = '' }: Props) => {
  const state = useContext(AppContext) as AppContextType

  const handleClick = () => {
    state.setIsSettingsMenuOpen(false)
  }

  return (
    <StyledSettingsMenu
      className={className}
      $isOpen={state.isSettingsMenuOpen}
    >
      <div style={{ margin: '2rem 0' }}>
        <h1 style={{ margin: '0 1rem 0.5rem 0' }}>Players</h1>
        {/* <div style={{ display: 'flex' }}>
          <label
            style={{ display: 'block', width: '5vw', height: '5vw' }}
            htmlFor="playerChoice1"
          >
            <input
              style={{ opacity: 0 }}
              type="radio"
              id="playerChoice1"
              name="playerChoice"
              value="1"
            />
            1
          </label>
          <label
            style={{ display: 'block', width: '5vw', height: '5vw' }}
            htmlFor="playerChoice2"
          >
            <input
              style={{ opacity: 0 }}
              type="radio"
              id="playerChoice2"
              name="playerChoice"
              value="2"
            />
            2
          </label>
          <label
            style={{ display: 'block', width: '5vw', height: '5vw' }}
            htmlFor="playerChoice3"
          >
            <input
              style={{ opacity: 0 }}
              type="radio"
              id="playerChoice3"
              name="playerChoice"
              value="3"
            />
            3
          </label>
          <label
            style={{ display: 'block', width: '5vw', height: '5vw' }}
            htmlFor="playerChoice4"
          >
            <input
              style={{ opacity: 0 }}
              type="radio"
              id="playerChoice4"
              name="playerChoice"
              value="4"
            />
            4
          </label>
        </div> */}
        <input
          style={{ width: '125px' }}
          type="number"
          min={1}
          max={4}
          value={state.numPlayers}
          onChange={(e) => state.setNumPlayers(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleClick}>Close</button>
    </StyledSettingsMenu>
  )
}

export default SettingsMenu

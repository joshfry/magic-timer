import { useState, createContext } from 'react'
import GlobalStyle from 'components/GlobalStyle'
import ClockScreen from 'components/ClockScreen'
import SettingsMenu, { SettingsMenuButton } from 'components/SettingsMenu'
import StyledApp from './App.style'

export type AppContextType = {
  numPlayers: number
  setNumPlayers: (num: number) => void
  time: number
  setTime: (num: number) => void
  isPaused: boolean
  setIsPaused: (bool: boolean) => void
  isSettingsMenuOpen: boolean
  setIsSettingsMenuOpen: (bool: boolean) => void
}

const initialState = {
  numPlayers: 4,
  time: 1800,
  isPaused: false,
  isSettingsMenuOpen: false,
}

export const AppContext = createContext<AppContextType | null>(null)

const App = () => {
  const [numPlayers, setNumPlayers] = useState(initialState.numPlayers)
  const [time, setTime] = useState(initialState.time)
  const [isPaused, setIsPaused] = useState(initialState.isPaused)
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(
    initialState.isSettingsMenuOpen,
  )

  const state = {
    time,
    setTime,
    isPaused,
    setIsPaused,
    numPlayers,
    setNumPlayers,
    isSettingsMenuOpen,
    setIsSettingsMenuOpen,
  }

  return (
    <StyledApp>
      <GlobalStyle />
      <AppContext.Provider value={state}>
        <SettingsMenu />
        <SettingsMenuButton />
        <ClockScreen />
      </AppContext.Provider>
    </StyledApp>
  )
}

export default App

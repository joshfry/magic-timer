import { useState, createContext } from 'react'
import GlobalStyle from 'components/GlobalStyle'
import ClockScreen from 'components/ClockScreen'
import SettingsMenu, { SettingsMenuButton } from 'components/SettingsMenu'
import StyledApp from './App.style'

export type AppContextType = {
  time: number
  setTime: (num: number) => void
  numPlayers: number
  setNumPlayers: (num: number) => void
  isSettingsMenuOpen: boolean
  setIsSettingsMenuOpen: (bool: boolean) => void
}

const initialState = {
  time: 1800,
  numPlayers: 4,
  isSettingsMenuOpen: false,
}

export const AppContext = createContext<AppContextType | null>(null)

const App = () => {
  const [time, setTime] = useState(initialState.time)
  const [numPlayers, setNumPlayers] = useState(initialState.numPlayers)
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(
    initialState.isSettingsMenuOpen,
  )

  const state = {
    time,
    setTime,
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

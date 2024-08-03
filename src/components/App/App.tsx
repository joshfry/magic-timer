import { useState, createContext } from 'react'
import GlobalStyle from 'components/GlobalStyle'
import ClockScreen from 'components/ClockScreen'
import SettingsMenu, { SettingsMenuButton } from 'components/SettingsMenu'
import StyledApp from './App.style'

export type AppContextType = {
  numPlayers: number
  setNumPlayers: (num: number) => void
  isSettingsMenuOpen: boolean
  setIsSettingsMenuOpen: (bool: boolean) => void
}

export const AppContext = createContext<AppContextType | null>(null)

const App = () => {
  const [numPlayers, setNumPlayers] = useState(4)
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false)

  const state = {
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

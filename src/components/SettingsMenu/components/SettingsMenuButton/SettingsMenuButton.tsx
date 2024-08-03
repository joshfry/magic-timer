import { useContext } from 'react'
import { AppContext, AppContextType } from 'components/App'
import StyledSettingsMenuButton from './SettingsMenuButton.style'

export interface Props {
  className?: string
}

const SettingsMenuButton = ({ className = '' }: Props) => {
  const state = useContext(AppContext) as AppContextType

  const handleClick = () => {
    state.setIsSettingsMenuOpen(true)
  }

  return (
    <StyledSettingsMenuButton className={className} onClick={handleClick}>
      <span>☰</span>
    </StyledSettingsMenuButton>
  )
}

export default SettingsMenuButton

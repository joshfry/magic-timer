import GlobalStyle from 'components/GlobalStyle'
import StyledApp from './App.style'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <div className="clock">
        <button className="clock__button">
          <div className="player">Player 1</div>
          <div className="timer">29:59</div>
        </button>
      </div>
      <div className="clock">
        <button className="clock__button">
          <div className="player">Player 2</div>
          <div className="timer">29:59</div>
        </button>
      </div>
      <div className="clock">
        <button className="clock__button">
          <div className="player">Player 3</div>
          <div className="timer">29:59</div>
        </button>
      </div>
      <div className="clock">
        <button className="clock__button">
          <div className="player">Player 4</div>
          <div className="timer">29:59</div>
        </button>
      </div>
    </StyledApp>
  )
}

export default App

import GlobalStyle from 'components/GlobalStyle'
import StyledApp from './App.style'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <div className="row row--1">
        <div className="clock">
          <button className="clock__button" tabIndex={2}>
            <div className="player">Player 2</div>
            <div className="timer">29:59</div>
          </button>
        </div>
        <div className="clock">
          <button className="clock__button" tabIndex={3}>
            <div className="player">Player 3</div>
            <div className="timer">29:59</div>
          </button>
        </div>
      </div>
      <div className="row row--2">
        <div className="clock">
          <button className="clock__button" tabIndex={4}>
            <div className="player">Player 4</div>
            <div className="timer">29:59</div>
          </button>
        </div>
        <div className="clock">
          <button className="clock__button" tabIndex={1}>
            <div className="player">Player 1</div>
            <div className="timer">29:59</div>
          </button>
        </div>
      </div>
    </StyledApp>
  )
}

export default App

import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import ScoreBoardProvider from "./context/ScoreBoardCtx.jsx";

function App() {
  return (
    <>
      <ScoreBoardProvider>
        <div className="player-scoreboard">
          <Player />
          <ScoreBoard />
        </div>
        <div id="challenges">
          <TimerChallenge title="Challenge 0" targetTime={1} />
          <TimerChallenge title="Challenge 1" targetTime={5} />
          <TimerChallenge title="Challenge 2" targetTime={10} />
          <TimerChallenge title="Challenge 3" targetTime={15} />
        </div>
      </ScoreBoardProvider>
    </>
  );
}

export default App;

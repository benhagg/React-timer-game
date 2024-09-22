import { useState, useRef, useContext } from "react";
import ResultModal from "./ResultModal";
import { ScoreBoardCxt } from "../context/ScoreBoardCtx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); // this ref is used to start and stop the timer when the button is clicked
  const dialog = useRef(); // this ref is used to open the dialog modal

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  //access context values
  const { totalScore, games, updateTotalScore, incrementGames } =
    useContext(ScoreBoardCxt);

  const timerRunning = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timerExpired = timeRemaining <= 0;

  // logic for when the timer expires and the user loses
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  // reset the time remaining from within the modal component. this is so we can get remaining time in the modal before the reset
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    const score = timeRemaining
      ? ((1 - timeRemaining / (targetTime * 1000)) * 100).toFixed(0)
      : 0;
    updateTotalScore(score); //add score to total score
    incrementGames((prev) => (prev += 1)); // add one to games played
  }

  //logic for when the user starts the timer
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  // this is for when the user stops the timer
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>you result</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerRunning ? handleStop : handleStart}>
            {timerRunning ? "Stop Time" : "Start Challenge"}
          </button>
        </p>
        <p className="">
          {" "}
          {timerRunning ? "Time Is Running ..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}

import { useContext } from "react";
import { ScoreBoardCxt } from "../context/ScoreBoardCtx";

export default function ScoreBoard() {
  const { totalScore, games } = useContext(ScoreBoardCxt);
  const avg = games ? (totalScore / games).toFixed(2) : 0;

  return (
    <>
      <div id="score-board">
        <br></br>
        <p>{/* Total Score:&nbsp;&nbsp;<strong> {totalScore}</strong> */}</p>
        <p>
          Played:&nbsp;&nbsp;<strong> {games}</strong>
        </p>
        <p>
          Avg:&nbsp;&nbsp;<strong>{avg}</strong>
        </p>
      </div>
    </>
  );
}

import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import selectMessage from "../utils/messages.js";

const ResultModal = forwardRef(
  ({ remainingTime, targetTime, onReset }, ref) => {
    const dialog = useRef(null); // Use this ref for the <dialog> element.

    // Use useImperativeHandle to expose the `open` method to the parent component.
    useImperativeHandle(ref, () => ({
      open: () => {
        if (dialog.current) {
          dialog.current.showModal(); // This correctly shows the modal using the internal dialog ref.
        }
      },
    }));

    const modalTimeLeft = (remainingTime / 1000).toFixed(2);
    const score = remainingTime
      ? ((1 - remainingTime / (targetTime * 1000)) * 100).toFixed(0)
      : 0;

    // Determine the result message based on the score.
    let resultMessage = selectMessage(score);
    console.log(resultMessage);

    // STYLING
    // Determine dynamic styles based on score value.
    const calculateBackgroundColor = (score) => {
      const red = Math.round((100 - score) * 2.55);
      const green = Math.round(score * 2.55);
      const blue = 0;
      return `rgb(${red}, ${green}, ${blue})`;
    };

    const modalStyle = {
      backgroundColor: calculateBackgroundColor(score),
      border: `3px solid ${calculateBackgroundColor(score)}`,
    };

    return createPortal(
      <dialog ref={dialog} className="result-modal" style={modalStyle}>
        <h1>{score}</h1>
        <h2>{resultMessage}</h2>
        <p>
          The target time was{" "}
          <strong>
            {targetTime} second{targetTime > 1 ? "s" : ""}.
          </strong>
        </p>
        {modalTimeLeft <= 0 ? undefined : (
          <p>
            You stopped the timer with{" "}
            <strong>{modalTimeLeft} seconds left.</strong>
          </p>
        )}
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;

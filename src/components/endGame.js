import React from "react";

export default function endGame({ handleReset }) {
  function handlePress() {
    handleReset();
  }

  return (
    <div className="endGame">
      <div>Good Job!</div>
      <button onClick={handlePress}>Reset</button>
    </div>
  );
}

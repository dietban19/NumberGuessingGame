import React from "react";

export default function Gameover({ handleReset }) {
  function handlePress() {
    handleReset();
  }
  return (
    <div className="endGame">
      <div>GAME OVER!</div>
      <button onClick={handlePress}>Reset</button>
    </div>
  );
}

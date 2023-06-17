import React from "react";
import { useState } from "react";
import styles from "../styles/grid.module.css";

const Numpad = ({ input, setInput, handleCheck, guesses }) => {
  const handleButtonClick = (value) => {
    if (input.length === 5) {
      return; // Limit reached, do nothing
    }
    setInput(input + value);
  };

  const handleClear = () => {
    setInput(input.slice(0, -1));
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 9; i++) {
      buttons.push(
        <button
          className={styles.numButton}
          disabled={guesses.length >= 6 ? true : false}
          key={i}
          onClick={() => handleButtonClick(i.toString())}
        >
          {i}
        </button>
      );
    }

    // buttons.push(

    // );

    // Split the buttons into rows
    const rows = [];
    let row = [];
    for (let i = 0; i < buttons.length; i++) {
      row.push(buttons[i]);
      if ((i + 1) % 3 === 0 || i === buttons.length - 1) {
        rows.push(<div key={i}>{row}</div>);
        row = [];
      }
    }

    return rows;
  };

  return (
    <div>
      {/* <input type="text" value={input} /> */}
      <div className={styles.numpadContainer}>
        <div className={styles.numpad}>
          {renderButtons()}
          <div className={styles.zeroBack}>
            <button disabled={true} className={styles.extraButton}>
              d
            </button>
            <button
              disabled={guesses.length >= 6 ? true : false}
              className={styles.numButton}
              key={0}
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              disabled={guesses.length >= 6 ? true : false}
              key={"clear"}
              className={styles.numButton}
              onClick={handleClear}
            >
              {"<"}
            </button>
          </div>
        </div>

        <button
          className={styles.enterButton}
          disabled={
            guesses.length >= 6 ||
            input.length < 5 ||
            (guesses.correctNumbers && guesses.correctPositions) === 5
              ? true
              : false
          }
          onClick={() => {
            handleCheck();
          }}
        >
          CHECK
        </button>
      </div>
    </div>
  );
};

export default Numpad;

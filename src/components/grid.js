import React from "react";
import styles from "../styles/grid.module.css";

export default function Grid({ guesses, input }) {
  const emptyRows = Array(10 - guesses.length).fill({});

  return (
    <div className={styles.gridContainer}>
      <table>
        <thead>
          <tr>
            <th>Your Guess</th>
            <th>Correct Numbers</th>
            <th>Correct Positions</th>
          </tr>
        </thead>
        <tbody>
          {guesses.map((guess, index) => (
            <tr key={index}>
              <td>{guess.guess}</td>
              <td>{guess.correctNumbers}</td>
              <td>{guess.correctPositions}</td>
            </tr>
          ))}
          {emptyRows.map((_, index) => (
            <tr key={index + guesses.length}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.inputContainer}> {input}</div>
    </div>
  );
}

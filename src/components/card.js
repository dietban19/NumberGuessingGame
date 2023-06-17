import React from "react";
import styles from "../styles/grid.module.css";
import Grid from "./grid";
import Numpad from "./numpad";
import { useState } from "react";

export default function Card() {
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [randomArray, setRandomArray] = useState(generateRandomArray());

  function generateRandomArray() {
    const arr = [];
    while (arr.length < 5) {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
      }
    }
    return arr;
  }
  function handleCorrectNumbers(e) {
    const correctNumbers = e.filter((number) => randomArray.includes(number));
    return correctNumbers.length;
  }
  function handleCorrectPos(e) {
    let count = 0;

    for (let i = 0; i < e.length; i++) {
      if (e[i] === randomArray[i]) {
        count++;
      }
    }

    return count;
  }

  function handleCheck() {
    console.log(randomArray);
    const inputArray = input.split("").map(Number);

    const result = {
      guess: input,
      correctNumbers: handleCorrectNumbers(inputArray),
      correctPositions: handleCorrectPos(inputArray),
    };
    setGuesses((prevGuesses) => [...prevGuesses, result]);

    setIsDisabled(false);
    setInput("");
  }

  return (
    <main>
      <div className={styles.card}>
        <Grid guesses={guesses} input={input} />
        <Numpad
          input={input}
          setInput={setInput}
          handleCheck={handleCheck}
          guesses={guesses}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
      </div>
    </main>
  );
}

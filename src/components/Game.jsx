import React, { useState, useEffect } from 'react';
import Board from "./Board";
import Dice from "./Dice";
import SnakesData from "../data/snakes-data";

export default function Game({ boardSize, crookedDice }) {
  const initPosition = 0;
  const [position, setPosition] = useState(initPosition);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const checkForSnake = () => {
      const _snakeData = SnakesData.find((snakeData) => {
        return snakeData.startPos === position;
      });
      if (_snakeData) {
        setPosition(_snakeData.endPos);
      }
    }

    const timer = setTimeout(checkForSnake, 200);
    return () => clearTimeout(timer);
  }, [position]);

  const cellsCount = boardSize * boardSize;

  const checkWinner = (diceNum) => {
    const newPosition = position + diceNum;
    if (newPosition > cellsCount) {
      alert(`You need only ${cellsCount - position} to win. Please try again!`);
      return false;
    }
    setPosition(newPosition);
    return newPosition === cellsCount;
  }

  const onDiceRoll = (diceNum) => {
    if (position === 0) {
      if (diceNum !== 6) {
        return;
      }
      diceNum = 1;
    }
    const winner = checkWinner(diceNum);
    if (winner) setWinner(winner);
  }

  const resetGame = () => {
    setPosition(initPosition);
    setWinner(false);
  }

  const renderCongrats = () => {
    return (<>
      <div className="congrats-msg">🎉 Congratulations! You won! 🎉</div>
      <button className="button" onClick={resetGame}>Reset Game</button>
    </>);
  }

  return (
    <div className="game">
      <Board boardSize={boardSize} curPosition={position} />
      <div className="controls">
        {winner ? renderCongrats() : <Dice onDiceRoll={onDiceRoll} isCrooked={crookedDice} />}
      </div>
    </div>
  );
}

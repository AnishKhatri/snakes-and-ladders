import React, { useState, useEffect } from 'react';
import { generateRandomNumber } from '../utils'

export default function Dice({ onDiceRoll, isCrooked }) {
  const MIN_DICE_NUM = 1;
  const MAX_DICE_NUM = 6;
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [disabled]);

  const rollDice = () => {
    setDisabled(true);
    const max = isCrooked ? MAX_DICE_NUM / 2 : MAX_DICE_NUM;
    let newDiceNum = generateRandomNumber(MIN_DICE_NUM, max);
    newDiceNum = isCrooked ? newDiceNum * 2 : newDiceNum;
    console.log("Dice Number: ", newDiceNum)
    onDiceRoll(newDiceNum);
  };

  return (
    <button className={disabled ? "button disabled" : "button"}
      onClick={disabled ? null : rollDice}>Roll Dice</button>
  );
}

import { emojies } from "@mocks/emojies";
import { heroes } from "@mocks/heroes";
import { findIndex, sample } from "lodash";

export const MATRIX_SIZE = [6, 6];

export const START_FROM = 0;

export const KEYS_TO_CHANGE_EMOJIES = ["q", "w", "e", "r", "t", "y"];

export const MATRIX = ((i, j) => {
  const matrix = new Array(i).fill(0).map(() => new Array(j).fill(0));

  heroes.forEach((hero, idx) => {
    const n = Math.floor(idx / i);
    const m = idx % j;

    matrix[n][m] = hero;
  });

  return matrix;
})(MATRIX_SIZE[0], MATRIX_SIZE[1]);

export const matrixMovement = (
  event: KeyboardEvent,
  position: [number, number],
  setPosition: React.Dispatch<React.SetStateAction<[number, number]>>
) => {
  event.preventDefault();
  let iCurrent = position[0];
  let jCurrent = position[1];

  switch (event.key) {
    case "ArrowLeft":
      // Left pressed
      if (jCurrent === 0) {
        jCurrent = 5;
      } else {
        jCurrent -= 1;
      }
      break;
    case "ArrowRight":
      // Right pressed
      if (jCurrent === 5) {
        jCurrent = 0;
      } else {
        jCurrent += 1;
      }
      break;
    case "ArrowUp":
      // Up pressed
      if (iCurrent === 0) {
        iCurrent = 5;
      } else {
        iCurrent -= 1;
      }
      break;
    case "ArrowDown":
      // Down pressed
      if (iCurrent === 5) {
        iCurrent = 0;
      } else {
        iCurrent += 1;
      }
      break;
  }
  if (iCurrent === 5 && jCurrent === 5) {
    jCurrent = 0;
  }
  setPosition([iCurrent, jCurrent]);
};

export const updateEmojiByIndex = (event: KeyboardEvent) =>
  KEYS_TO_CHANGE_EMOJIES.includes(event.key)
    ? KEYS_TO_CHANGE_EMOJIES.indexOf(event.key)
    : null;

import { heroes } from "@mocks/heroes";

import DamnBoi from "@audio/damn_boy.mp3";
import Kuzko from "@audio/kuzko_kuzko.mp3";

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
  if (event.type === "keyup") return;
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
  event.type === "keyup" &&
  KEYS_TO_CHANGE_EMOJIES.includes(event.key) &&
  KEYS_TO_CHANGE_EMOJIES.indexOf(event.key);

const keyLog: Record<any, any> = {};

const showPupupAndPlaySoundAndPauseTimer = (
  source: string,
  setPaused: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const sound = new Audio();

  sound.addEventListener("loadedmetadata", () => {
    const duration = sound.duration;
    if (Number(duration)) {
      setPaused(true);
      sound.play();
      setTimeout(() => {
        setPaused(false);
      }, duration * 1000);
    }
  });

  sound.src = source;
};

export const playSoundAndStopIntervalOnKeyCombination = (
  { type, key, repeat }: KeyboardEvent,
  setPaused: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (repeat) return;

  if (type === "keydown") {
    keyLog[key] = true;

    if (keyLog.d && key === "b") {
      showPupupAndPlaySoundAndPauseTimer(DamnBoi, setPaused);
    }

    if (keyLog.k && key === "v") {
      showPupupAndPlaySoundAndPauseTimer(Kuzko, setPaused);
    }
  }

  if (type === "keyup") delete keyLog[key];
};

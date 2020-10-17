import { useState, useRef, useEffect, DependencyList } from 'react';

const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!#$%&';

const random = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const replaceString = (text: string, character: string, index: number): string => {
  return text.substr(0, index) + character + text.substr(index + character.length);
};

export const useFlickerText = (
  rawText: string,
  maxDuration: number,
  replayProbability: number,
  deps?: DependencyList,
): string => {
  const [text, setText] = useState(rawText);
  const [completed, setCompleted] = useState(false);
  const durations = useRef([...Array(rawText.length)].map(_ => random(maxDuration)));

  const forward = () => {
    let processingText = text;
    for (let i = 0; i < rawText.length; i++) {
      if (durations.current[i] < 0) continue;
      if (durations.current[i] == 0) {
        processingText = replaceString(processingText, rawText[i], i);
      } else {
        processingText = replaceString(processingText, characters[random(characters.length)], i);
      }
      durations.current[i]--;
    }
    setText(processingText);
    setCompleted(!durations.current.some(v => 0 <= v));
  };

  const reset = () => {
    durations.current = [...Array(rawText.length)].map(_ => random(maxDuration));
    forward();
  };

  useEffect(() => {
    if (completed) {
      if (Math.random() < replayProbability) reset();
    } else {
      forward();
    }
  }, deps);

  return text;
};

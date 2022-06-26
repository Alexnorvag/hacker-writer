import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { writerAlphabet } from "../helpers/constants";

const defaultWriterOptions = (options) => ({
  loadingText: "LOADING",
  overrideSpeed: 75,
  incrementSpeed: 1000,
  onLoaded: () => {},
  alphabet: writerAlphabet,
  ...options,
});

export const useHackerWriter = (userOptions) => {
  const options = defaultWriterOptions(userOptions);
  const [letters, setLetters] = useState([]);
  const [loadingText, setLoadingText] = useState(options.loadingText);

  const overrideInterval = useRef();
  const incrementInterval = useRef();

  const { loadedPos, isLoaded } = useMemo(() => {
    const loadedPos = options.loadingText.length - loadingText.length;
    const isLoaded = loadedPos === options.loadingText.length;

    return {
      loadedPos,
      isLoaded,
    };
  }, [loadingText, options.loadingText]);

  const override = useCallback(() => {
    for (let i = loadedPos; i < options.loadingText.length; i++) {
      const idx = Math.floor(Math.random() * options.alphabet.length);

      setLetters((letters) => [
        ...letters.slice(0, i),
        options.alphabet[idx],
        ...letters.slice(i + 1),
      ]);
    }
  }, [loadedPos, options.alphabet, options.loadingText]);

  const increment = useCallback(() => {
    setLetters((letters) => [
      ...letters.slice(0, loadedPos),
      options.loadingText[loadedPos],
      ...letters.slice(loadedPos + 1),
    ]);

    setLoadingText((text) => text.substring(1));
  }, [loadedPos, options.loadingText]);

  useEffect(() => {
    overrideInterval.current = setInterval(() => {
      override();
    }, options.overrideSpeed);

    return () => {
      clearInterval(overrideInterval.current);
    };
  }, [override, options.overrideSpeed]);

  useEffect(() => {
    incrementInterval.current = setInterval(increment, options.incrementSpeed);

    return () => {
      clearInterval(incrementInterval.current);
    };
  }, [increment, options.incrementSpeed]);

  useEffect(() => {
    if (isLoaded) {
      clearInterval(overrideInterval.current);
      clearInterval(incrementInterval.current);

      options.onLoaded?.();
    }
  }, [isLoaded, options]);

  return { letters };
};

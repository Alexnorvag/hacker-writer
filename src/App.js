import { useState } from "react";
import clsx from "clsx";

import { useHackerWriter } from "./hooks/useHackerWriter";

function App() {
  const [isHacked, setIsHacked] = useState(false);

  const handleWritingFinished = () => {
    setIsHacked(true);
  };

  const { letters, loadedPos } = useHackerWriter({
    loadingText: "*STOLEN*PASSWORD*",
    overrideSpeed: 40,
    incrementSpeed: 750,
    onLoaded: handleWritingFinished,
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-almost-black font-montserrat selection:bg-jungle-green selection:text-almost-black">
      <div className={clsx({ "animate-pulse": isHacked })}>
        {letters.map((letter, idx) => (
          <span
            key={idx}
            className={clsx(
              "text-jungle-green uppercase text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
              `${idx < loadedPos ? "bright" : "dim"}-glow`
            )}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;

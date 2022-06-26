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
    <div className="w-full min-h-screen flex items-center justify-center bg-almost-black">
      {letters.map((letter, idx) => (
        <span
          key={idx}
          className={clsx(
            "text-jungle-green uppercase font-mono text-6xl",
            `${idx < loadedPos ? "bright" : "dim"}-glow`,
            { "animate-pulse": isHacked }
          )}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default App;

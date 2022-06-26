import { useState } from "react";

import { useHackerWriter } from "./hooks/useHackerWriter";

function App() {
  const [isHacked, setIsHacked] = useState(false);

  const handleWritingFinished = () => {
    console.log("SUCCESSFULLY LOADED");

    setIsHacked(true);
  };

  const { letters } = useHackerWriter({
    loadingText: "*STEALED*PASSWORD*",
    overrideSpeed: 40,
    incrementSpeed: 750,
    onLoaded: handleWritingFinished,
  });

  return (
    <div className="uppercase">
      {isHacked && <div>[Hacked]</div>}

      <div>
        {letters.map((letter, idx) => (
          <span key={idx}>{letter}</span>
        ))}
      </div>
    </div>
  );
}

export default App;

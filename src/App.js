import React, { useState, useMemo } from "react";
import "./App.css";
import TriviaCardList from "./Components/TriviaCardList";
import ScoreCard from "./Components/ScoreCard";
import TimedResponse from "./Components/TimedResponse";
import { ScoreContext, scoreContext } from "./Context/ScoreContext";

const App = () => {
  const cardScore = 10;

  // const [currentScore, setCurrentScore] = useState(0);
  //  const storedScore = useMemo(()=> ({currentScore, setCurrentScore}), [currentScore, setCurrentScore]);

  return (

    <ScoreContext.Provider value = {0}>
       <>
        <header className="f-headline lh-solid b "> TRIVIA NIGHT</header>

        <TimedResponse />
        <TriviaCardList cardScore={cardScore} />
        <ScoreCard cardScore={cardScore} />

        {/* how does someone use and update the context value, also why memoize? */}
      </>


    </ScoreContext.Provider>
   
    
    
  );
};

export default App;

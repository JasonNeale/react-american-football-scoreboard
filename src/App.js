//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    //const [count, setCount] = useState(initialState);
    const initialState = 0
    const [homeCount, setHomeCount] = useState(initialState),
        [awayCount, setAwayCount] = useState(initialState)
    const TD = 7,
        FG = 3

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name"><img className="logo" src="images/lions.png" /></h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeCount }</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name"><img src="images/pats.png" /></h2>
            <div className="away__score">{ awayCount }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeCount(homeCount + TD)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeCount(homeCount + FG)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayCount(awayCount + TD)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayCount(awayCount + FG)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

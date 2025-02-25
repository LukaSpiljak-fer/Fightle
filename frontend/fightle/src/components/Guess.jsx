import React from "react";



const Guess = ({ fighter, index }) => {
  return (
    <li key={index} className="guessDiv">
        <div className="fighterName">{fighter}</div>
        <div className="guessHints">
            <div className="hintBox">Country<br />
            <div className="boxHint">
                Nigeria
            </div></div>
            <div className="hintBox">Weightclass<br />
            <div className="boxHint">
                Light Heavyweight
            </div></div>
            <div className="hintBox">Champ<br />
            <div className="boxHint">
                Was champ
            </div></div>
            <div className="hintBox">Activity<br />
            <div className="boxHint">
                Active
            </div></div>
            <div className="hintBox">Ranking<br />
            <div className="boxHint">
                4
            </div></div>
            <div className="hintBox">No. title fights<br/>
            <div className="boxHint">
                8
            </div></div>
        </div>
    </li>
  );
};

export default Guess;

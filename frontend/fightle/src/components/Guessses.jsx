import React from "react";
import Guess from "./Guess";

const Guesses = ({ guesses }) => {

    const revGuesses = [...guesses].reverse();

    return (
        <div>
        <ul className="guessesDiv">
            {revGuesses.map((fighter, index) => (
            <Guess key={index} fighter={fighter} index={index}/>
            ))}
        </ul>
        </div>
    );
};

export default Guesses;

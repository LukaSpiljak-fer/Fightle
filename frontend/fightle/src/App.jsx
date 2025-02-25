import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Guesses from "./components/Guessses";
import Cookies from "js-cookie";

const fighters = [
  "Islam Makhachev",
  "Israel Adesanya",
  "Khabib Nurmagomedov",
  "Conor McGregor",
  "Jon Jones",
  "Alexander Volkanovski",
];

const todaysFighter = "Islam Makhachev";

const MAX_GUESSES = 3;

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Load guesses from cookies when the app starts
  useEffect(() => {
    const savedGuesses = Cookies.get("guessedFighters");
    if (savedGuesses) {
      const parsedGuesses = JSON.parse(savedGuesses);
      setGuesses(parsedGuesses);
      if (parsedGuesses.includes(todaysFighter)) {
        setIsCorrectGuess(true);
      } else if (parsedGuesses.length >= MAX_GUESSES) {
        setGameOver(true);
      }
    }
  }, []);

  const handleGuess = (fighter) => {
    if (!guesses.includes(fighter)) {
      const newGuesses = [...guesses, fighter];
      setGuesses(newGuesses);
      Cookies.set("guessedFighters", JSON.stringify(newGuesses), { expires: 7 });

      if (fighter === todaysFighter) {
        setIsCorrectGuess(true);
      } else if (newGuesses.length >= MAX_GUESSES) {
        setGameOver(true);
      }
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Fightle</h1>
      {!isCorrectGuess && !gameOver && (
        <Input fighters={fighters} onGuess={handleGuess} guessedFighters={guesses} />
      )}
      {isCorrectGuess && <h3 style={{ color: "green" }}>Correct!</h3>}
      {gameOver && !isCorrectGuess && <h3 style={{ color: "red" }}>Unlucky, try again next time!</h3>}
      {gameOver && !isCorrectGuess && <h3>Today's fighter was {todaysFighter}!</h3>}
      <Guesses guesses={guesses} />
    </div>
  );
};

export default App;

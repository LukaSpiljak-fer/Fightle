import React, { useState } from "react";

const Input = ({ fighters, onGuess, guessedFighters }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Handle input change and filter suggestions
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredSuggestions = fighters
        .filter((fighter) => 
          fighter.toLowerCase().startsWith(value.toLowerCase()) &&
          !guessedFighters.includes(fighter) // Exclude already guessed fighters
        )
        .slice(0, 3); // Limit to 3 suggestions
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selecting a suggestion
  const handleSelect = (fighter) => {
    setInputValue(fighter);
    setSuggestions([]);
  };

  // Handle guessing
  const handleGuess = () => {
    const trimmedValue = inputValue.trim();
    const normalizedValue = trimmedValue.toLowerCase();
    const normalizedFighters = fighters.map((fighter) => fighter.toLowerCase());
  
    if (
      trimmedValue &&
      normalizedFighters.includes(normalizedValue) &&
      !guessedFighters.includes(trimmedValue)
    ) {
      onGuess(trimmedValue); // Pass the correctly formatted fighter name
      setInputValue("");
      setSuggestions([]);
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        className="guessInput"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Guess UFC fighter name ..."
      />
      <button className="guessButton" onClick={handleGuess}>
        Guess
      </button>

      {/* Dropdown suggestions */}
      {suggestions.length > 0 && (
        <ul className="dropdownList">
          {suggestions.map((fighter, index) => (
            <li className="suggestion"
              key={index}
              onClick={() => handleSelect(fighter)}
            >
              {fighter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;

"use client";

import StrengthContext from "@/Context/StrengthContext";
import { useContext, useState } from "react";
import classes from "./Suggestion.module.css";

const suggestions = [
  "Ability to learn from mistakes",
  "Ability to prioritize",
  "Accuracy",
  "Building teams",
  "Balancing",
  "Calming agitated client",
  "Caring",
  "Data input",
  "Debugging Computers",
  "Facilitating productive meetings",
  "Fair",
  "Fast learning",
  "Gathering information",
  "Handling",
  "Hosting",
  "Launching",
  "Leadership",
  "Goal oriented",
  "Loyalty",
  "Versatile",
  "Multitasking",
  "Marketing",
  "Examining",
  "Evaluating",
  "Inovating",
  "Independence",
  "Judgment",
  "Judging",
  "Kindness",
  "Knowledgeable",
  "Networking",
  "Negotiation",
  "Observant",
  "Optimistic",
  "Persistent",
  "Practical",
  "Qualifing",
  "Questioning",
  "Researching",
  "Resolving",
  "Self Motivated",
  "Solution oriented",
  "Tactful",
  "Tracking Details",
  "Understanding",
  "Upgrading",
  "Verifying",
  "Willpower",
  "Working quickly",
];

const Suggestions = () => {
  const [suggestion, setSuggestion] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { addInputs } = useContext(StrengthContext);
  const filteredOptions = suggestions.filter((option) =>
    option.toLowerCase().includes(suggestion.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSuggestion(e.target.value);
    setIsOpen(true);
  };
  const handleOptionClick = (option) => {
    setSuggestion(option);
    setIsOpen(false);
  };

  const handleFocus = () => {
    if (suggestion.length > 0) {
      setIsOpen(true);
    }
  };

  const addToLocalStorage = (e) => {
    e.preventDefault();
    addInputs(suggestion);
    setSuggestion("");
  };

  return (
    <div className={`flex-items ${classes.inputs_wrapper}`}>
      <>
        <input
          type="text"
          placeholder="Start typing to see suggestions"
          value={suggestion}
          onChange={handleInputChange}
          onFocus={handleFocus}
        />
        {isOpen && (
          <div className={`box-shadow ${classes.options}`}>
            {filteredOptions.map((option) => (
              <div
                key={option}
                className={classes.option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </>
      <button onClick={addToLocalStorage}>Add</button>
    </div>
  );
};

export default Suggestions;

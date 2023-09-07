import React, { useState } from "react";
import "../index.css";
const initalValue = {
  currentSavings: "",
  yearlyContribution: "",
  expectedReturn: "",
  duration: "",
};
const Form = (props) => {
  const [userInput, setUserInput] = useState(initalValue);

  const inputChangeHandler = (identifier, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [identifier]: +value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(userInput);
    resetHandler();
  };
  const resetHandler = () => {
    setUserInput(initalValue);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) =>
              inputChangeHandler("currentSavings", e.target.value)
            }
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              inputChangeHandler("yearlyContribution", e.target.value)
            }
            value={userInput.yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) =>
              inputChangeHandler("expectedReturn", e.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={submitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;

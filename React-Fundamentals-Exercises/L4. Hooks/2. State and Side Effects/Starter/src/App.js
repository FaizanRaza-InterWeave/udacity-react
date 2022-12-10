import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [equation, setEquation] = useState(generateRandomEquation);

  const [numCorrect, setNumCorrect] = useState(0);
  const [numQuestions, setNumQuestion] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${equation.value1} + ${equation.value2} + ${equation.value3} = ${equation.proposedAnswer}`}</p>
        </div>
        <button
          onClick={() => {
            if (
              equation.value1 + equation.value2 + equation.value3 ===
              equation.proposedAnswer
            ) {
              setNumCorrect(numCorrect + 1);
            }
            setEquation({
              value1: Math.floor(Math.random() * 100),
              value2: Math.floor(Math.random() * 100),
              value3: Math.floor(Math.random() * 100),
              proposedAnswer:
                Math.floor(Math.random() * 3) +
                equation.value1 +
                equation.value2 +
                equation.value3,
            });
            setNumQuestion(numQuestions + 1);
          }}
        >
          True
        </button>
        <button
          onClick={() => {
            if (
              equation.value1 + equation.value2 + equation.value3 !==
              equation.proposedAnswer
            ) {
              setNumCorrect(numCorrect + 1);
            }
            setEquation(generateRandomEquation());
            setNumQuestion(numQuestions + 1);
          }}
        >
          False
        </button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    </div>
  );
};

export default App;

const generateRandomEquation = () => {
  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  const value3 = Math.floor(Math.random() * 100);
  console.log(Math.floor(Math.random() * 3));

  return {
    value1,
    value2,
    value3,
    proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
  };
};

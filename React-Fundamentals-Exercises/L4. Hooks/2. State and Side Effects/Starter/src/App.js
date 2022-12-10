import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [equation, setEquation] = useState("");
  const [numCorrect, setNumCorrect] = useState(0);
  const [numQuestions, setNumQuestion] = useState(0);

  useEffect(() => {
    const generateRandomEquation = () => {
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      console.log(Math.floor(Math.random() * 3));

      return {
        value1,
        value2,
        value3,
        proposedAnswer:
          Math.floor(Math.random() * 3) + value1 + value2 + value3,
      };
    };
    setEquation(generateRandomEquation());
  }, [numCorrect, numQuestions]);

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
            isEquationCorrect(equation) && setNumCorrect(numCorrect + 1);
            setNumQuestion(numQuestions + 1);
          }}
        >
          True
        </button>
        <button
          onClick={() => {
            !isEquationCorrect(equation) && setNumCorrect(numCorrect + 1);
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

const isEquationCorrect = (equation) => {
  return (
    equation.value1 + equation.value2 + equation.value3 !==
    equation.proposedAnswer
  );
};

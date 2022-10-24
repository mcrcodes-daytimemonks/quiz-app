import { useState, useEffect } from "react";

const GamePlay = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswers, setCurrentAnswers] = useState([]);

  const incrementQuestionIndex = () => {
    if (questions.length) {
      setQuestionIndex((prev) => {
        if (prev + 1 < questions.length) {
          return prev + 1;
        }
        return prev;
      });
    }
  };

  useEffect(() => {
    setQuestions(JSON.parse(localStorage.getItem("questions")));
  }, []);

  useEffect(() => {
    if (questions.length) {
      setCurrentQuestion(questions[questionIndex].question);
      setCurrentAnswers(
        Object.entries(questions[questionIndex].answers).filter(
          (answer) => answer[1]
        )
      );
    }
  }, [questions, questionIndex]);

  return (
    <div>
      <h1>GamePlay</h1>
      <p>{currentQuestion}</p>
        {currentAnswers.map((answer) => (
          <button key={answer[0]}>{answer[1]}</button>
        ))}
      <br />
      <button onClick={incrementQuestionIndex}>Next Question</button>
    </div>
  );
};

export default GamePlay;

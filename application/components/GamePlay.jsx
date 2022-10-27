import { useState, useEffect } from "react";

const GamePlay = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState([]);

  useEffect(() => {
    setQuestions(
      localStorage.getItem("questions")
        ? JSON.parse(localStorage.getItem("questions"))
        : []
    );
    setQuestionIndex(localStorage.getItem("questionIndex") || 0);
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[questionIndex] || 0);
    setCurrentAnswers(questions[questionIndex]?.answers || []);
  }, [questions, questionIndex]);

  const incrementQuestionIndex = () => {
    const incrementedQuestionIndex =
      1 + Number(localStorage.getItem("questionIndex"));

    if (incrementedQuestionIndex < questions.length) {
      localStorage.setItem("questionIndex", incrementedQuestionIndex);
      setQuestionIndex(localStorage.getItem("questionIndex"));
    }
  };

  return (
    <div>
      <h1>GamePlay</h1>
      <p>{currentQuestion?.question}</p>
      {currentAnswers.map((answer) => (
        <button key={answer}>{answer}</button>
      ))}
      <br />
      <button onClick={incrementQuestionIndex}>Next Question</button>
    </div>
  );
};

export default GamePlay;

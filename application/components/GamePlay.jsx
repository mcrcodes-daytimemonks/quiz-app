import { useState, useEffect } from "react";

const GamePlay = ({questions}) => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswers, setCurrentAnswers] = useState([]);

  console.log("GamePlay");
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
    if(localStorage.getItem("questions")) {
      setQuestions(JSON.parse(localStorage.getItem("questions")));
    }
   }, []);

  useEffect(() => {
    if (questions.length) {
      setCurrentQuestion(questions[questionIndex].question);
      setCurrentAnswers(questions[questionIndex].answers);
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

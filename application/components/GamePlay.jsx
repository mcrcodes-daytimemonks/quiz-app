import { useState, useEffect } from "react";
import router from "next/router";

const GamePlay = () => {
  const [questionLimit, setQuestionLimit] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswersCount, setSelectedAnswersCount] = useState(0);

  console.log({
    questionIndex,
    questionLimit,
    selectedAnswersCount,
  });

  const handleAnswerSelection = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleEndGame = () => {
    handleAnswerSubmit();
    router.push("/endGame");
  }

  const handleAnswerSubmit = () => {
    // store the submitted answer along with the current answer's id
    const storedSelectedAnswers = localStorage.getItem("selectedAnswers");
    if (!storedSelectedAnswers) {
      localStorage.setItem(
        "selectedAnswers",
        JSON.stringify([{ questionId: currentQuestion.id, selectedAnswer }])
      );
    } else {
      const selectedAnswers = JSON.parse(
        localStorage.getItem("selectedAnswers")
      );

      localStorage.setItem(
        "selectedAnswers",
        JSON.stringify([
          ...selectedAnswers,
          { questionId: currentQuestion.id, selectedAnswer },
        ])
      );
    }
    incrementQuestionIndex();
    setSelectedAnswer("");
    setSelectedAnswersCount(JSON.parse(localStorage.getItem("selectedAnswers")).length);
  };

  useEffect(() => {
    setQuestions(
      localStorage.getItem("questions")
        ? JSON.parse(localStorage.getItem("questions"))
        : []
    );
    setQuestionIndex(localStorage.getItem("questionIndex") || 0);
    setQuestionLimit(localStorage.getItem("questionLimit"));
  }, []);

  useEffect(() => {
    const selectedAnswers = localStorage.getItem("selectedAnswers");
    if (selectedAnswers) {
      setSelectedAnswersCount(
        JSON.parse(localStorage.getItem("selectedAnswers")).length
      );
    }
  }, [questionIndex]);

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

      <fieldset>
        <legend>{currentQuestion?.question}</legend>
        {currentAnswers.map((answer) => (
          <div key={answer}>
            <input
              type="radio"
              id={answer}
              name="answer"
              value={answer}
              checked={answer === selectedAnswer}
              onChange={handleAnswerSelection}
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        ))}
      </fieldset>
      <br />
      {Number(questionIndex) === Number(questionLimit - 1) &&
      Number(selectedAnswersCount) === Number(questionLimit -1) ? (
        <button disabled={!selectedAnswer} onClick={handleEndGame}>
          End Game
        </button>
      ) : (
        <button disabled={!selectedAnswer} onClick={handleAnswerSubmit}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default GamePlay;

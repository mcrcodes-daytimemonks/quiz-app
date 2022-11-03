import { useState, useEffect } from "react";
import router from "next/router";
import updateStoredSelectedAnswers from "../utils/updateStoredSelectedAnswers";
import css from "../styles/GamePlay.module.css";
import StringCodeParser from "./StringCodeParser";

const GamePlay = () => {
  const [questionLimit, setQuestionLimit] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswersCount, setSelectedAnswersCount] = useState(0);

  const handleAnswerSelection = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleEndGame = () => {
    handleAnswerSubmit();
    router.push("/endGame");
  };

  const handleAnswerSubmit = () => {
    updateStoredSelectedAnswers(currentQuestion, selectedAnswer);
    incrementQuestionIndex();
    setSelectedAnswer("");
    setSelectedAnswersCount(
      JSON.parse(localStorage.getItem("selectedAnswers")).length
    );
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
    <div className={css.GamePlay__grid}>
      <h1>
        Question {+questionIndex + 1} of {questionLimit}
      </h1>

      <fieldset className={css.answers}>
        <legend>
          {currentQuestion.question && (
              <StringCodeParser string={currentQuestion.question} />
            )}
        </legend>
        {currentAnswers.map((answer) => (
          <div key={answer} className={css.answer__input}>
            <input
              type="radio"
              id={answer}
              name="answer"
              value={answer}
              checked={answer === selectedAnswer}
              onChange={handleAnswerSelection}
            />
            <label className="radio-bttn-label" htmlFor={answer}>
              <StringCodeParser string={answer} />
            </label>
          </div>
        ))}
      </fieldset>
      <br />
      {Number(questionIndex) === Number(questionLimit - 1) &&
      Number(selectedAnswersCount) === Number(questionLimit - 1) ? (
        <button
          className="button primary"
          disabled={!selectedAnswer}
          onClick={handleEndGame}
        >
          End Game
        </button>
      ) : (
        <button
          className="button primary"
          disabled={!selectedAnswer}
          onClick={handleAnswerSubmit}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default GamePlay;

import LoginPopup from "../components/LoginPopUp";
import GamePlay from "../components/GamePlay";
import { useState, useEffect } from "react";

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const [questionLimit, setQuestionLimit] = useState(1);

  console.log({ questions });

  useEffect(() => {
    setQuestions(
      localStorage.getItem("questions")
        ? JSON.parse(localStorage.getItem("questions"))
        : []
    );
    setCategory(localStorage.getItem("category") || "");
    setUsername(localStorage.getItem("username") || "");
    setQuestionLimit(localStorage.getItem("questionLimit"));
  }, []);

  useEffect(() => {
    if (category && !questions.length && questionLimit) {
      fetch(`/api/questions?category=${category}&limit=${questionLimit}`)
        .then((res) => res.json())
        .then((questions) => {
          localStorage.setItem("questions", JSON.stringify(questions));
          setQuestions(questions);
        })
        .catch((err) => console.error(err));
    }
  }, [questions, category, questionLimit]);

  return (
    <div>
      {!username ? (
        <LoginPopup />
      ) : (
        <div>{!!questions.length && <GamePlay />} </div>
      )}
    </div>
  );
};

export default Game;

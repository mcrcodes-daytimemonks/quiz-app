import LoginPopup from "../components/LoginPopUp";
import GamePlay from "../components/GamePlay";
import { useState, useEffect } from "react";

const Game = () => {
  const [questions, setQuestions] = useState("");
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const cachedQuestions = localStorage.getItem("questions");
    if (cachedQuestions) {
      setQuestions(cachedQuestions);
    }

    const cachedUsername = localStorage.getItem("username");
    if (cachedUsername) {
      setUsername(cachedUsername);
    }

    const cachedCategory = localStorage.getItem("category");
    if (cachedCategory) {
      setCategory(cachedCategory);
    }
  }, []);

  useEffect(() => {
    if (!questions) {
      fetch(`/api/questions/${category}/`)
        .then((res) => {
          console.log({ res });
          return res.json();
        })
        .then((questions) => setQuestions(questions))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div>{!username ? <LoginPopup /> : <GamePlay questions={questions} />}</div>
  );
};

export default Game;

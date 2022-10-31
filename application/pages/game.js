import LoginPopup from "../components/LoginPopUp";
import GamePlay from "../components/GamePlay";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Game = () => {
  const { data: session } = useSession();
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [questionLimit, setQuestionLimit] = useState(1);

  console.log({ questions });

  useEffect(() => {
    setQuestions(
      localStorage.getItem("questions")
        ? JSON.parse(localStorage.getItem("questions"))
        : []
    );
    setCategory(localStorage.getItem("category") || "");
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
    <div>{!!questions.length && session ? <GamePlay /> : <LoginPopup />}</div>
  );
};

export default Game;

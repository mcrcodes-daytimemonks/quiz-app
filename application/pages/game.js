import LoginPopup from "../components/LoginPopUp";
import GamePlay from "../components/GamePlay";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Game = () => {
  const { data: session } = useSession();
  const [category, setCategory] = useState(null);
  const [questionLimit, setQuestionLimit] = useState(null);
  const [questions, setQuestions] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setCategory(localStorage.getItem("category"));
    setQuestionLimit(localStorage.getItem("questionLimit"));

    let storedQuestions;
    try {
      storedQuestions = JSON.parse(localStorage.getItem("questions"));
    } catch (err) {
      console.error(err);
    }
    if (Array.isArray(storedQuestions) && storedQuestions.length) {
      setQuestions(storedQuestions);
    }
  }, []);

  useEffect(() => {
    if (category && questionLimit && !questions) {
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
    <>
      {session && questions && <GamePlay />}
      {!session && <LoginPopup />}
    </>
  );
};

export default Game;

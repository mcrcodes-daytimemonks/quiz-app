import { useState, useEffect } from "react";
import LoginPopup from "../../components/LoginPopUp";
import GamePlay from "../../components/GamePlay";
import getQuestionByCategory from "../../dbQueries/getQuestionsByCategory";

export const  getServerSideProps = async (params) => {
  const category = params.query.category;
  return {
    props: {
      questions: await getQuestionByCategory(category),
    },
  };
};

const game = ({ questions }) => {
  const [cachedUsername, setCachedUsername] = useState("");

  useEffect(() => {
    setCachedUsername(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", questions);
  }, []);

  return <div>{cachedUsername ? <GamePlay /> : <LoginPopup />}</div>;
};

export default game;

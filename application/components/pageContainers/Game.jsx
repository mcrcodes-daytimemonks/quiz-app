import { useState, useEffect } from "react";
import LoginPopup from "../LoginPopUp";
import GamePlay from "../GamePlay";

const Game = ({ questions }) => {
  const [cachedUsername, setCachedUsername] = useState("");

  useEffect(() => {
    setCachedUsername(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", questions);
  }, []);

  return <div>{cachedUsername ? <GamePlay /> : <LoginPopup />}</div>;
};

export default Game;

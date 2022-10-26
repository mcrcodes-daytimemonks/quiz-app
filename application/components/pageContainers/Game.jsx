import { useState, useEffect } from "react";
import LoginPopup from "../LoginPopUp";
import GamePlay from "../GamePlay";

const Game = ({ questions }) => {
  const [cachedUsername, setCachedUsername] = useState("");

  useEffect(() => {
    setCachedUsername(localStorage.getItem("username"));
  }, []);

  return <div>{cachedUsername ? <GamePlay questions={questions} /> : <LoginPopup />}</div>;
};

export default Game;

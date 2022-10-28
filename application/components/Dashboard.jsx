import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GameOptions from "./GameOptions";

const Dashboard = ({ handleLogout }) => {
  const [questions, setQuestions] = useState([]);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const goToGame = () => router.push("/game");

  const returnToGameOptions = () => {
    localStorage.setItem("questions", "");
    localStorage.setItem("questionIndex", 0);
    localStorage.setItem("category", "");
    localStorage.setItem("questionLimit", 1);
    localStorage.setItem("selectedAnswers", "");
    router.reload();
  };

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Hi, <span>{username}</span>
      </p>
      {questions.length ? (
        <div>
          <p>
            You are currently half way through a previous game. What would you
            like to do?
          </p>
          <button type="button" onClick={goToGame}>
            Continue
          </button>
          <button type="button" onClick={returnToGameOptions}>
            New Game
          </button>
        </div>
      ) : (
        <GameOptions />
      )}
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

Dashboard.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Dashboard;

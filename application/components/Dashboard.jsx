import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const categories = ["JavaScript", "HTML", "mySQL"];

const Dashboard = ({ cachedUsername, handleLogout }) => {
  const [questions, setQuestions] = useState(null);
  const [category, setCategory] = useState("");
  const router = useRouter();

  const newGame = (category) => {
    localStorage.setItem("category", category);
    dispatchEvent(new Event("questions"));
    router.push(`/game`);
  };

  const resumeGame = () => {
    router.push("/game");
  };

  const cacheCategory = (category) => {
    localStorage.setItem("category", category);
    window.dispatchEvent(new Event("category"));
  };

  useEffect(() => {
    window.addEventListener("category", () => {
      setCategory(localStorage.getItem("category"));
    })
  }, [])

  useEffect(() => {
    window.addEventListener("questions", () => {
      setQuestions(localStorage.getItem("questions"));
    });
    return () =>
      window.removeEventListener("questions", () =>
        setQuestions(localStorage.getItem("questions"))
      );
  }, []);

  return (
    <div>
      {questions ? (
        <div>
          <p>
            You are currently half way through a previous game. What would you
            like to do?
          </p>
          <button type="button" onClick={resumeGame}>
            Continue
          </button>
          <button type="button" onClick={newGame}>
            New Game
          </button>
        </div>
      ) : (
        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome, <span>{cachedUsername}</span>
          </p>
          <p>Please choose a category</p>
          {categories.map((category, i) => (
            <button key={category} onClick={() => cacheCategory(category)}>
              {category}
            </button>
          ))}
          <br />
          <button type="button" onClick={() => newGame(category)}>Play</button> 
          <br />
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  cachedUsername: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Dashboard;

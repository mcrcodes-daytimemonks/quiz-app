import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const categories = ["JavaScript", "HTML", "mySQL"];

const Dashboard = ({ handleLogout }) => {
  const [questions, setQuestions] = useState([]);
  const [questionLimit, setQuestionLimit] = useState(1);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const goToGame = () => router.push("/game");

  const returnToGameOptions = () => {
    ["questions", "questionIndex", "category"].forEach((key) =>
      localStorage.setItem(key, "")
    );
    router.reload();
  };

  const storeCategory = (category) =>
    localStorage.setItem("category", category);

  const storeQuestionLimit = (event) => {
    localStorage.setItem("questionLimit", event.target.value);
    setQuestionLimit(Number(event.target.value));
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
        <div>
          <p>
            Welcome, <span>{username}</span>
          </p>
          <p>Please choose a category</p>
          {categories.map((category, i) => (
            <button key={category} onClick={() => storeCategory(category)}>
              {category}
            </button>
          ))}
          <label htmlFor="question-limit">How many questions?</label>
          <input
            type="number"
            step="1"
            min="1"
            onChange={storeQuestionLimit}
            value={questionLimit}
          />
          <br />
          <button type="button" onClick={goToGame}>
            Play
          </button>
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
  handleLogout: PropTypes.func.isRequired,
};

export default Dashboard;

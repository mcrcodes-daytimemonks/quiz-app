import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const categories = ["JavaScript", "HTML", "mySQL"];

const Dashboard = ({ cachedUsername, handleLogout }) => {
  const [cachedQuestions, setCachedQuestions] = useState(false);
  const router = useRouter();

  const selectCategory = (category) => {
    console.log({ category });
    const limit = 5;
    router.push(`/game/${category}?limit=${limit}`);
  };

  const returnToPreviousGame = () => {
    router.push("/game");
  }

  // First thing we need to do is check local storage for questions *done*
  useEffect(() => {
    if(localStorage.getItem("questions")) {
      setCachedQuestions(true);
    }
  }, []);


  // Show some markup that asks if the user wants to continue a previous game
  // if there are questions in local storage
  // Componet name could GameContinue

  // Otherwise, show a component that asks the user to set up a new game
  // Component name could be GameSetup

  return (
    <div>
    {!cachedQuestions && <div>
      <h1>Dashboard</h1>
      <p>
        Welcome, <span>{cachedUsername}</span>
      </p>
      <p>Please choose a category</p>
      {categories.map((category, i) => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
      <br />
      <button type="button" onClick={handleLogout}>
        Logout
      </button></div>}
    {cachedQuestions && <div>
      <p>You are currently half way through a previous game. What would you like to do?</p>
      <button type="button" onClick={returnToPreviousGame}>Continue</button>
      <button type="button" onClick={null}>New Game</button> 
      </div>}
    </div>
  );
};

Dashboard.propTypes = {
  cachedUsername: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

  export default Dashboard;

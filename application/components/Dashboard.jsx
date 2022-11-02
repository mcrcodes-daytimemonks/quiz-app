import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GameOptions from "./GameOptions";
import { signOut, useSession } from "next-auth/react";
import deleteStoredGameData from "../utils/deleteStoredGameData";

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  const goToGame = () => router.push("/game");

  const returnToGameOptions = () => {
    deleteStoredGameData(); 
    router.reload();
  };

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
    console.log("local username is", localStorage.getItem("username"));
  }, []);

  return (
    <div>
      {session.user.name ? `Signed in as ${session.user.name}` : "Guest" }

      <button type="button" onClick={signOut}>
        Sign Out
      </button>
      <p>
        Hey, <span>{session?.user?.name?.split(" ")[0]}!</span>
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
          <br />
          <br />
          <button type="button" onClick={returnToGameOptions}>
            New Game
          </button>
        </div>
      ) : (
        <GameOptions />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Dashboard;

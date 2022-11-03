import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Score from "../components/Score";
import deleteStoredGameData from "../utils/deleteStoredGameData";

const EndGame = () => {
  const router = useRouter();
  const [scores, setScores] = useState([]);
  const goToHomePage = () => router.replace("/");

  useEffect(() => {
    const selectedAnswers = localStorage.getItem("selectedAnswers");
    deleteStoredGameData();

    fetch("/api/getGameResults", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedAnswers),
    })
      .then((res) => res.json())
      .then((data) => setScores(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {!!scores.length && <Score data={scores} />}
      <button className="button primary" onClick={goToHomePage}>
        Back to start
      </button>
    </div>
  );
};

export default EndGame;

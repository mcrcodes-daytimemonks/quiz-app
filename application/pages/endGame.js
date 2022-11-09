import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Score from "../components/Score";
import deleteStoredGameData from "../utils/deleteStoredGameData";

const EndGame = () => {
  const router = useRouter();
  const [scores, setScores] = useState([]);
  const goToHomePage = () => router.replace("/");

  useEffect(() => {
    let selectedAnswers = localStorage.getItem("selectedAnswers");

    if (selectedAnswers) {
      fetch("/api/getScore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedAnswers),
      })
        .then((res) => res.json())
        .then((data) => {
          deleteStoredGameData();
          setScores(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return <>{!!scores.length && <Score data={scores} />}</>;
};

export default EndGame;

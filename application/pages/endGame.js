import { useEffect } from "react";

const endGame = () => {
  // collect users answers and username
  // send them to the server
  // check their correct/incorrect statuses
  // return results to page
  // render results in a pleasing and informative way
  // would be nice to see a leaderboard....

  useEffect(() => {
    const selectedAnswers = localStorage.getItem("selectedAnswers");
    
    fetch("/api/getGameResults", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedAnswers)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return <div>endGame</div>;
};

export default endGame;

import Game from "../../components/pageContainers/Game";
import { useState, useEffect } from "react";

const Container = () => {
  const [questions, setQuestions] = useState([])
  console.log({questions});

  useEffect(() => {
    if(!localStorage.getItem("questions")) {
      fetch(`../api/getQuestionsByCategory${category}?limit=${limit}`)
        .then(res => res.json())
        .then((data) => setQuestions(data))
    }
  }, []);

 return(
  <Game questions={questions} />
 )
}

export default Container;

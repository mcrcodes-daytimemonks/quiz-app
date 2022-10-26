import Game from "../../components/pageContainers/Game";
import { useState, useEffect } from "react";

const Container = () => {
  const [cachedQuestions, setCachedQuestions] = useState([])
  console.log("game/index.js")
  console.log({cachedQuestions});

  useEffect(() => {
    if(localStorage.getItem("questions")) {
      setCachedQuestions(localStorage.getItem("questions"))
    }
  }, []);

 return(
  <Game questions={cachedQuestions} />
 )
}

export default Container;

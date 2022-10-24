import { useState, useEffect } from "react";
import multipleChoiceQuestions from "../../data/multipleChoiceQuestions.json";
import LoginPopup from "../../components/LoginPopUp";
import GamePlay from "../../components/GamePlay";

export const getServerSideProps = (params) => {
  console.log({params});
  const category = params.query.category;

  return {
    props: {
      questions: JSON.stringify(
        multipleChoiceQuestions
          .reduce((collector, currentItem) => {
            const questionTagsHasCategory = currentItem.tags.some(
              (tag) => tag.name.toLowerCase() === `${category}`.toLowerCase()
            );
            if (questionTagsHasCategory) {
              collector.push(currentItem);
            }
            return collector;
          }, [])
          .slice(0, 5)
      ),
    },
  };
};

const game = ({ questions }) => {
  const [cachedUsername, setCachedUsername] = useState("");

  useEffect(() => {
    setCachedUsername(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", questions);
  }, []);

  return <div>{cachedUsername ? <GamePlay /> : <LoginPopup />}</div>;
};

export default game;

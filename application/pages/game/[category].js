import { useState, useEffect } from "react";
import questions from "../../data/questions.json";
import LoginPopup from "../../components/LoginPopUp";
import GamePlay from "../../components/GamePlay";

function getQuestionByCategory(category) {
  return JSON.stringify(
    questions
      .reduce((collector, currentItem) => {
        const questionTagsHasCategory = currentItem.tags.some(
          (tag) => tag.toLowerCase() === `${category}`.toLowerCase()
        );
        if (questionTagsHasCategory) {
          collector.push(currentItem);
        }
        return collector;
      }, [])
      .slice(0, 5)
      .map((question) => {
        question.answers = question.answers.sort(() => Math.random() - 0.5);
        return question;
      })
  );
}

export const getServerSideProps = (params) => {
  const category = params.query.category;
  return {
    props: {
      questions: getQuestionByCategory(category),
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

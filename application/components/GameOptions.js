import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import css from "../styles/GameOptions.module.css";

const INIT = {
  QUESTION_LIMIT: {
    MIN: "1",
    MAX: "5",
    DEFAULT: "3",
  },
  CATEGORIES: ["JavaScript", "HTML"],
};

const GameOptions = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedQuestionLimit, setSelectedQuestionLimit] = useState(
    INIT.QUESTION_LIMIT.DEFAULT
  );

  const updateCategory = ({ target: { value: category } }) => {
    localStorage.setItem("category", category);
    setSelectedCategory(category);
  };

  const updateQuestionLimit = ({ target: { value: questionLimit } }) => {
    localStorage.setItem("questionLimit", questionLimit);
    setSelectedQuestionLimit(questionLimit);
  };

  const goToGame = (event) => {
    event.preventDefault();
    router.push("/game");
  };

  useEffect(() => {
    localStorage.setItem("questionLimit", INIT.QUESTION_LIMIT.DEFAULT);
  }, []);

  return (
    <form
      className={css.GameOptions__grid}
      name="game-options"
      onSubmit={goToGame}
    >
      <fieldset>
        <legend>Please choose a category</legend>

        {INIT.CATEGORIES.map((category) => (
          <div key={category}>
            <input
              checked={category === selectedCategory}
              id={category}
              name="category"
              onChange={updateCategory}
              required
              type="radio"
              value={category}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </fieldset>

      <div>
        <label htmlFor="questionCount">Number of questions: </label>
        <input
          id="questionCount"
          max={INIT.QUESTION_LIMIT.MAX}
          min={INIT.QUESTION_LIMIT.MIN}
          onChange={updateQuestionLimit}
          required
          step="1"
          type="number"
          value={selectedQuestionLimit}
        />
      </div>
      <button type="submit">Play Game</button>
    </form>
  );
};

export default GameOptions;

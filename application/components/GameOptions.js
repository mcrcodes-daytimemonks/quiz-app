import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import css from "../styles/GameOptions.module.css";
import axios from "axios";

const INIT = {
  QUESTION_LIMIT: {
    MIN: "1",
    MAX: "8",
    DEFAULT: "5",
  },
};

const GameOptions = () => {
  const router = useRouter();
  const [categories, setCategories] = useState(null);
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
    axios
      .get("/api/getCategories")
      .then(({ data }) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {categories && (
        <form
          className={css.GameOptions__grid}
          name="game-options"
          onSubmit={goToGame}
        >
          <fieldset className={css.categories}>
            <legend>Please choose a category</legend>

            {categories.map((category) => (
              <div className={css.category__input} key={category}>
                <input
                  checked={category === selectedCategory}
                  id={category}
                  name="category"
                  onChange={updateCategory}
                  required
                  type="radio"
                  value={category}
                />
                <label className="radio-bttn-label" htmlFor={category}>
                  {category}
                </label>
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
          <button
            className={`${css.GameOptions__playButton} button primary`}
            type="submit"
          >
            Play Game
          </button>
        </form>
      )}
    </>
  );
};

export default GameOptions;

import css from "../styles/Score.module.css";
import StringCodeParser from "../components/StringCodeParser";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Score = (props) => {
  const { data } = props;

  const numCorrect = data.filter((item) => item.isCorrect).length;

  return (
    <>
      <div className={css.Score}>
        <div className={css.Score__card}>
        <header>
          <p>
            You scored {numCorrect} out of {data.length}{" "}
          </p>
          <p>
            {numCorrect === data.length
              ? "Congratulations you scored 100%"
              : "Keep trying, you got this!"}
          </p>
        </header>

          {data.map((result) => (
            <div key={result.id} className={css.Score__result}>
              <p
                className={`
                    ${css.Score__verification}
                    ${
                      result.isCorrect
                        ? css.Score__correct
                        : css.Score__incorrect
                    }`}
              >
                <StringCodeParser string={result.question} />
                {result.isCorrect ? <BsCheckLg /> : <BsXLg />}
              </p>

              {!result.isCorrect && (
                <div className={css.Score__answer}>
                  Correct Answer
                  <StringCodeParser string={result.correctAnswer} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {numCorrect === data.length && <Confetti recycle={false} />}
    </>
  );
};

export default Score;

import css from "../styles/Score.module.css";
import StringCodeParser from "../components/StringCodeParser";
import { useRouter } from "next/router";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Score = (props) => {
  const router = useRouter();
  const { data } = props;

  const numCorrect = data.filter((item) => item.isCorrect).length;

  const goToHomePage = () => router.replace("/");

  return (
    <>
      <div className={css.Score}>
        <div className={css.Score__card}>
          <header>
            <h1 className={css.Score__cardTitle}>
              <span>
                You scored {numCorrect} out of {data.length}{" "}
              </span>
              <br />
              <span>
                {numCorrect === data.length
                  ? "Congratulations you scored 100%"
                  : "Keep trying, you got this!"}
              </span>
            </h1>
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
                  Correct Answer:
                  <StringCodeParser string={result.correctAnswer} />
                </div>
              )}
            </div>
          ))}
        </div>
      <button className={`${css.Score__backButton} button primary`} onClick={goToHomePage}>
        Back to start
      </button>
      </div>
      {numCorrect === data.length && <Confetti recycle={false} />}
    </>
  );
};

export default Score;

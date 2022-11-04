import css from "../styles/Score.module.css";
import StringCodeParser from "../components/StringCodeParser";
import { BsCheckLg, BsXLg,  } from "react-icons/bs";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Score = (props) => {
  const { data } = props;

  const numCorrect = data.filter((item) => item.isCorrect).length;

  return (
    <div>
      
      <h1>Score Component</h1>
      <p>{numCorrect === data.length ? <Confetti /> : !<Confetti />}</p>
      <p>
        You scored {numCorrect} out of {data.length}.  {numCorrect === data.length ? "Congratulations you scored 100%" : "Keep learning"}.
      </p>
      
      <div>
        {data.map((result) => (
          <div
            key={result.id}
            className={css.result}
          >
          <div>
            <p className={result.isCorrect ? css.correct : css.wrong}>
              <StringCodeParser string={result.question} />
            </p>
            {!result.isCorrect && <p> Correct Answer: <StringCodeParser string={result.correctAnswer} /></p>}
          </div>
            <p>{result.isCorrect ? <BsCheckLg className={css.correct} /> : <BsXLg className={css.wrong} />}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Score;
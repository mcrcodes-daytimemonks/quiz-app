import css from "../styles/Score.module.css";

const Score = (props) => {
  const { data } = props;

  const numCorrect = data.filter((item) => item.isCorrect).length;

  return (
    <div>
      <h1>Score Component</h1>
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
              {result.question}
            </p>
            {!result.isCorrect && <p> Correct Answer: {result.correctAnswer}</p>}
          </div>
            <p>{result.isCorrect ? "tick" : "cross"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Score;

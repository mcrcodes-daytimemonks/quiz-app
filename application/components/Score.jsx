const Score = (props) => {
  const { data } = props;

  const numCorrect = data.filter((item) => item.isCorrect).length;

  return (
    <div>
      <h1>Score Component</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <p>
        You scored {numCorrect} out of {data.length}
      </p>
      <div>
        {data.map((result) => (
          <div
            key={result.id}
            style={{
              padding: "0 2rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
          <div>
            <p>{result.question}</p>
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

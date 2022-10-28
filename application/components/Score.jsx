const Score = (props) => {
  const { data } = props;

  const numCorrret = data.filter(item => item.isCorrect).length;
  
  return (
    <div>
      <h1>Score Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>You scored {numCorrret}</p>
    </div>
  );
};

export default Score;

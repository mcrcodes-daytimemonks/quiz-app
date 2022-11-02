export default function updateStoredSelectedAnswers(currentQuestion, selectedAnswer) {
    let storedSelectedAnswers;

    try {
      storedSelectedAnswers = JSON.parse(
        localStorage.getItem("selectedAnswers")
      );
    } catch (err) {
      console.error(err);
    }

    if (Array.isArray(storedSelectedAnswers)) {
      localStorage.setItem(
        "selectedAnswers",
        JSON.stringify([
          ...storedSelectedAnswers,
          { questionId: currentQuestion.id, selectedAnswer },
        ])
      );
    } else {
      localStorage.setItem(
        "selectedAnswers",
        JSON.stringify([{ questionId: currentQuestion.id, selectedAnswer }])
      );
    }
  };
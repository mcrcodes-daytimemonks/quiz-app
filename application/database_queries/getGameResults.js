import db from "./databaseClient";

export default async function getGameResults(selectedAnswers) {
  console.table({ selectedAnswers });
  const questionIds = selectedAnswers.map(({ questionId }) => questionId);

  try {
    await db.$connect();

    const dbQuestions = await db.questions.findMany({
      where: {
        id: { in: questionIds },
      },
    });

    // look at each answeredQuestion
    // and check that the first element in the
    // answers array is equal to the selectedAnswer
    // in the selectedAnswers array

    dbQuestions.map((answeredQuestion) => {
      console.table({
        dbQuestion: answeredQuestion.question,
        dbId: answeredQuestion.id,
        dbCorrectAnswer: answeredQuestion.answers[0],
        selectedAnswer: selectedAnswers.find(
          (selectedAnswer) => selectedAnswer.questionId == answeredQuestion.id
        ).selectedAnswer,
      });
    });

    await db.$disconnect();

    const isCorrectAnswer = (a, b) => {
      return a === b;
    };

    return dbQuestions
      .map((answeredQuestion) => ({
        question: answeredQuestion.question,
        id: answeredQuestion.id,
        correctAnswer: answeredQuestion.answers[0],
        answer: selectedAnswers.find(
          (selectedAnswer) => selectedAnswer.questionId == answeredQuestion.id
        ).selectedAnswer,
        isCorrect: isCorrectAnswer(selectedAnswers.find(
          (selectedAnswer) => selectedAnswer.questionId == answeredQuestion.id
        ).selectedAnswer, answeredQuestion.answers[0])
      }));

  } catch (err) {
    console.error(err);
    await db.$disconnect();
  }

  return { data: "gameResult from database" };
}

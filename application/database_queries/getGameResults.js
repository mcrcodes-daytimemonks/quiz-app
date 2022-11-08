import db from "./databaseClient";

export default async function getGameResults(selectedAnswers) {
  const questionIds = selectedAnswers.map(({ questionId }) => questionId);

  try {
    await db.$connect();

    const dbQuestions = await db.questions.findMany({
      where: {
        id: { in: questionIds },
      },
    });

    await db.$disconnect();

    const isCorrectAnswer = (a, b) => {
      return a === b;
    };

    return dbQuestions.map((answeredQuestion) => ({
      question: answeredQuestion.question,
      id: answeredQuestion.id,
      correctAnswer: answeredQuestion.answers[0],
      answer: selectedAnswers.find(
        (selectedAnswer) => selectedAnswer.questionId == answeredQuestion.id
      ).selectedAnswer,
      isCorrect: isCorrectAnswer(
        selectedAnswers.find(
          (selectedAnswer) => selectedAnswer.questionId == answeredQuestion.id
        ).selectedAnswer,
        answeredQuestion.answers[0]
      ),
    }));
  } catch (err) {
    console.error(err);
    await db.$disconnect();
  }
}

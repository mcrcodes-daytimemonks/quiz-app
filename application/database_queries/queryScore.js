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

    const collatedResults = (dbQuestions, selectedAnswers) => {
      const results = [];

      dbQuestions.forEach(({ question, id, answers }) => {
        const result = {
          id,
          question,
          correctAnswer: answers[0],
          selectedAnswer: null,
          isCorrect: null,
        };

        result.selectedAnswer = selectedAnswers.find(
          (selectedAnswer) => `${selectedAnswer.questionId}` === `${id}`
        ).selectedAnswer;

        result.isCorrect = result.selectedAnswer === answers[0];

        results.push(result);
      });

      return results;
    };

    return collatedResults(dbQuestions, selectedAnswers);

  } catch (err) {
    console.error(err);
    await db.$disconnect();
  }
}

import db from "./databaseClient";

export default async function getQuestionsByCategory({ category, limit }) {
  try {
    await db.$connect();

    const questionsByCategory = await db.questions.findMany({
      where: {
        tags: {
          hasEvery: [category],
        },
      },
    });

    await db.$disconnect();

    return JSON.stringify(
      questionsByCategory
        .sort((a, b) => Math.random() - 0.5)
        .slice(0, limit)
        .map(({ id, question, answers, format }) => ({
          id,
          question,
          answers: answers.sort((a, b) => Math.random() - 0.5),
          format,
        }))
    );
  } catch (err) {
    console.error(err);
    await db.$disconnect();
    process.exit(1);
  }
}

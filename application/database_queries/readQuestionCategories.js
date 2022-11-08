import db from "./databaseClient";

export default async function getQuestionsByCategory() {
  try {
    await db.$connect();

    const questions = await db.questions.findMany({});
    
    await db.$disconnect();

    return questions.reduce((categories, question) => {
      question.tags.forEach(tag => !categories.includes(tag) && categories.push(tag))
      return categories; 
    }, []);

  } catch (err) {
    console.error(err);
    await db.$disconnect();
    process.exit(1);
  }
}
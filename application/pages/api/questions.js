import getQuestionsByCategory from "../../database_queries/getQuestionsByCategory";

export default async function handler(req, res) {
  console.log({ req });
  const { category, limit } = req.query;
  const questions = await getQuestionsByCategory({ category, limit });
  res.status(200).json(questions);
}

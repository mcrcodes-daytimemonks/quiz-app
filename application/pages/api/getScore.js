import queryScore from "../../database_queries/queryScore";

export default async function handler(req, res) {
  const selectedAnswers = JSON.parse(req.body);
  res.status(200).json(await queryScore(selectedAnswers));
}

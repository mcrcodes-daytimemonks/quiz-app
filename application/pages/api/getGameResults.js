import getGameResults from "../../database_queries/getGameResults";

export default async function handler(req, res) {
  console.log(req.body);
  const selectedAnswers = JSON.parse(req.body);
  res.status(200).json(await getGameResults(selectedAnswers));
}

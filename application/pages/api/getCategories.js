import readQuestionCategories from "../../database_queries/readQuestionCategories";

export default async function handler(req, res) {
  res.status(200).json(await readQuestionCategories());
}

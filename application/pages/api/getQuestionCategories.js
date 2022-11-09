import queryQuestionCategories from "../../database_queries/queryQuestionCategories";

export default async function handler(req, res) {
  res.status(200).json(await queryQuestionCategories());
}

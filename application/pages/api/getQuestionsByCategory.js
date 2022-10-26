// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getQuestionsByCategory from "../../database_queries/getQuestionsByCategory";

export default async function handler(req, res) {
  return res.status(200).json(getQuestionsByCategory(())
}

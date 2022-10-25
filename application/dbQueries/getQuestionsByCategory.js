import questions from "../data/questions.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(category) {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here

  const questions = await prisma.questions_v3.findMany({
    where: {
      tags: {
        hasEvery: [`${category}`],
      },
    },
  });
  return questions;
}

export default async function getQuestionByCategory(category) {
  try {
    const questions = await main(category);
    await prisma.$disconnect();
    return JSON.stringify(questions);
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
}

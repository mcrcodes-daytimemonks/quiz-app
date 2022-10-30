import db from "./databaseClient";

export default async function getUserScores() {
  try {
    await db.$connect();

    const dbScores = await db.leaderBoard.findMany({});

    await db.$disconnect();

    return dbScores.sort((a, b) => b.score - a.score).slice(0, 10);
  } catch (err) {
    console.error(err);
    await db.$disconnect();
  }
}

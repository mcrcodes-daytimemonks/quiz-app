import db from "./databaseClient";

export const createUserScore = async (user, score) => {
  try {
    await db.$connect();

    const userScore = await db.leaderBoard.create({
      data: {
        user,
        score,
      },
    });
  } catch (err) {
    console.error(err);
    await db.$disconnect();
  }

  return userScore;
};

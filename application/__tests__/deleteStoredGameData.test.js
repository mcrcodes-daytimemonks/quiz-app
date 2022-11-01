import deleteStoredGameData from "../utils/deleteStoredGameData";
import "@testing-library/jest-dom";

const gameDataItems = [
  "questions",
  "questionIndex",
  "category",
  "questionLimit",
  "selectedAnswers",
];

describe("deleteStoredGameData", () => {
  it("should remove game data items from localStorage", () => {
    gameDataItems.forEach(item => localStorage.setItem([item], "test value"));

    deleteStoredGameData();

    gameDataItems.forEach(item => expect(localStorage.getItem([item])).toBeFalsy());
  });
});

import deleteStoredGameData from "../utils/deleteStoredGameData";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const gameData = {
  questions: "test",
  questionIndex: 3,
  category: "HTML",
  questionLimit: 5,
  selectedAnswers: ["one", "two", "three"],
};

describe("deleteStoredGameData", () => {
  it("should delete game data from localStorage", () => {
    for (const key in gameData) {
      localStorage.setItem([key], gameData[key]);
    }

    deleteStoredGameData();

    for (const key in gameData) {
      expect(localStorage.getItem([key])).toBeFalsy();
    }
  });
});

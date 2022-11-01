import updateStoredSelectedAnswers from "../utils/updateStoredSelectedAnswers";
import "@testing-library/jest-dom";

const userSelection0 = {
  currentQuestion: { id: "0" },
  selectedAnswer: "Test answer 1",
};
const userSelection1 = {
  currentQuestion: { id: "1" },
  selectedAnswer: "Test answer 2",
};

const userSelection2 = {
  currentQuestion: { id: "2" },
  selectedAnswer: "Test answer 3",
};

describe("updateStoredSelectedAnswers", () => {
  it("stores the user's selected answers in an array in localStorage", () => {
    expect(localStorage.getItem("selectedAnswers")).toBeFalsy();

    updateStoredSelectedAnswers(
      userSelection0.currentQuestion,
      userSelection0.selectedAnswer
    );

    expect(JSON.parse(localStorage.getItem("selectedAnswers"))).toEqual([
      {
        questionId: userSelection0.currentQuestion.id,
        selectedAnswer: userSelection0.selectedAnswer,
      },
    ]);

    updateStoredSelectedAnswers(
      userSelection1.currentQuestion,
      userSelection1.selectedAnswer
    );

    expect(JSON.parse(localStorage.getItem("selectedAnswers"))).toEqual([
      {
        questionId: userSelection0.currentQuestion.id,
        selectedAnswer: userSelection0.selectedAnswer,
      },
      {
        questionId: userSelection1.currentQuestion.id,
        selectedAnswer: userSelection1.selectedAnswer,
      },
    ]);

    updateStoredSelectedAnswers(
      userSelection2.currentQuestion,
      userSelection2.selectedAnswer
    );

    expect(JSON.parse(localStorage.getItem("selectedAnswers"))).toEqual([
      {
        questionId: userSelection0.currentQuestion.id,
        selectedAnswer: userSelection0.selectedAnswer,
      },
      {
        questionId: userSelection1.currentQuestion.id,
        selectedAnswer: userSelection1.selectedAnswer,
      },
      {
        questionId: userSelection2.currentQuestion.id,
        selectedAnswer: userSelection2.selectedAnswer,
      },
    ]);
  });
});

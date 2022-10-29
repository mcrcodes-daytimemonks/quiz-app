import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameOptions from "../components/GameOptions";

const INIT = {
  QUESTION_LIMIT: {
    MIN: "1",
    MAX: "5",
    DEFAULT: "3",
  },
  CATEGORIES: ["JavaScript", "HTML"],
};

const renderGameOptions = () => render(<GameOptions />);

describe("GameOptions", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderGameOptions();

    expect(asFragment()).toMatchSnapshot();
  });

  describe("Inputs form", () => {
    it("renders a form element to group the user inputs", () => {
      renderGameOptions();

      expect(screen.getByRole("form")).toBeInTheDocument();
    });
  });

  describe("Question Category input", () => {
    it("renders input/s to allow the user to select a question category", () => {
      renderGameOptions();
      const radioGroup = screen.getByRole("group", {
        name: /please choose a category/i,
      });

      expect(radioGroup).toBeInTheDocument();

      INIT.CATEGORIES.forEach((category) => {
        expect(
          within(radioGroup).getByRole("radio", { name: category })
        ).toBeInTheDocument();
      });
    });

    it("updates application state when the user selects a question category", () => {
      renderGameOptions();

      expect(localStorage.getItem("category")).toBeFalsy();

      const radioButtons = within(
        screen.getByRole("group", { name: /please choose a category/i })
      ).getAllByRole("radio");

      radioButtons.forEach((radioButton) => {
        fireEvent.click(radioButton);

        expect(localStorage.getItem("category")).toEqual(radioButton.value);
        expect(radioButton).toBeChecked();
      });
    });
  });

  describe("Number of Questions input", () => {
    it("renders a number input to allow the user to select the number of questions in a game", () => {
      renderGameOptions();

      expect(
        screen.getByRole("spinbutton", { name: /number of questions/i })
      ).toBeInTheDocument();
    });

    it("renders with a default value", () => {
      renderGameOptions();

      const numberInput = screen.getByRole("spinbutton", {
        name: /Number of questions:/i,
      });

      expect(numberInput.value).toEqual(INIT.QUESTION_LIMIT.DEFAULT);
    });

    it("updates application state when the user sets the number of questions", () => {
      renderGameOptions();
      const numberInput = screen.getByRole("spinbutton", {
        name: /Number of questions:/i,
      });

      expect(numberInput.value).toEqual(INIT.QUESTION_LIMIT.DEFAULT);
      expect(localStorage.getItem("questionLimit")).toEqual(
        INIT.QUESTION_LIMIT.DEFAULT
      );

      fireEvent.change(numberInput, {
        target: {
          value: Number(INIT.QUESTION_LIMIT.DEFAULT) + 1,
        },
      });

      expect(numberInput.value).toEqual(
        `${Number(INIT.QUESTION_LIMIT.DEFAULT) + 1}`
      );
      expect(localStorage.getItem("questionLimit")).toEqual(
        `${Number(INIT.QUESTION_LIMIT.DEFAULT) + 1}`
      );
    });
  });
});

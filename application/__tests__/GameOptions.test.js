import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameOptions from "../components/GameOptions";
import axios from "axios";
jest.mock("axios");

const INIT = {
  QUESTION_LIMIT: {
    MIN: "1",
    MAX: "5",
    DEFAULT: "3",
  },
  CATEGORIES: ["JavaScript", "HTML"],
};

const renderGameOptions = () => render(<GameOptions />);

beforeEach(() => axios.get.mockResolvedValue({ data: INIT.CATEGORIES }));

describe("GameOptions", () => {
  describe("Inputs form", () => {
    it("renders a form element to group the user inputs", async () => {
      renderGameOptions();

      expect(await screen.findByRole("form")).toBeInTheDocument();
    });

    it("renders a call to action", async () => {
      renderGameOptions();
      const callToAction = await screen.findByText(/please choose a category/i);
      expect(callToAction).toBeInTheDocument();
    });
  });

  describe("Question Category input", () => {
    it("renders input/s to allow the user to select a question category", async () => {
      renderGameOptions();
      const radioGroup = await screen.findByRole("group", {
        name: /please choose a category/i,
      });

      expect(radioGroup).toBeInTheDocument();

      INIT.CATEGORIES.forEach((category) => {
        expect(
          within(radioGroup).getByRole("radio", { name: category })
        ).toBeInTheDocument();
      });
    });

    it("updates application state when the user selects a question category", async () => {
      renderGameOptions();

      expect(localStorage.getItem("category")).toBeFalsy();

      const radioButtons = within(
        await screen.findByRole("group", { name: /please choose a category/i })
      ).getAllByRole("radio");

      radioButtons.forEach(async (radioButton) => {
        fireEvent.click(radioButton);

        expect(localStorage.getItem("category")).toEqual(radioButton.value);
        expect(radioButton).toBeChecked();
      });
    });
  });

  describe("Number of Questions input", () => {
    it("renders a number input to allow the user to select the number of questions in a game", async () => {
      renderGameOptions();

      expect(
        await screen.findByRole("spinbutton", { name: /number of questions/i })
      ).toBeInTheDocument();
    });

    it("renders with a default value", async () => {
      renderGameOptions();

      const numberInput = await screen.findByRole("spinbutton", {
        name: /Number of questions:/i,
      });

      expect(numberInput.value).toEqual(INIT.QUESTION_LIMIT.DEFAULT);
    });

    it("updates application state when the user sets the number of questions", async () => {
      renderGameOptions();
      const numberInput = await screen.findByRole("spinbutton", {
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

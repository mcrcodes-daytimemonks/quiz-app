export default function deleteStoredGameData() {
  [
    "questions",
    "questionIndex",
    "category",
    "questionLimit",
    "selectedAnswers",
  ].forEach((key) => localStorage.removeItem(key));
}

export default function deleteStoredGameData() {
  localStorage.removeItem("questions");
  localStorage.removeItem("questionIndex");
  localStorage.removeItem("category");
  localStorage.removeItem("questionLimit");
  localStorage.removeItem("selectedAnswers");
}

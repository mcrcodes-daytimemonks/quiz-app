const fs = require("fs");

fs.readFile("data/multipleChoiceQuestions.json", (err, data) => {
  if (err) throw err;
  let contents = JSON.parse(data);

  let cleanedData = contents
    .reduce(
      (collector, currentItem) =>
        collector.some((item) => item.id == currentItem.id)
          ? collector
          : [...collector, currentItem],
      []
    )
    .sort((a, b) => a.id - b.id);

  console.table(cleanedData.map((x) => x.id));

  fs.writeFile(
    "data/multipleChoiceQuestions.json",
    JSON.stringify(cleanedData),
    (err) => {
      if (err) throw err;
      else console.log("success");
    }
  );
});

import readQuestionCategories from "../../database_queries/readQuestionCategories";

describe("queryQuestionCategories", () => {
  let categories;
  beforeAll(async () => (categories = await readQuestionCategories()));

  it("returns an array of non empty strings", () => {
    console.log({ categories });
    expect(Array.isArray(categories)).toBeTruthy();
    expect(
      categories.every(
        (category) => typeof category === "string" && category.length
      )
    );
  });

  it("returns an array of unique categories", () => {
    expect(new Set([...categories]).size).toEqual(categories.length);
  });
});

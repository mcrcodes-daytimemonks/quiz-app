import mapToIsCodeObjs from "../utils/mapToIsCodeObjs";

const dl = "```"; // delimiter
const testCases = [
  {
    string: `Here is a JavaScript expression ${dl} 1 + 1 === 2 ${dl}`,
    isCodeBoolArray: [false, true],
  },
  {
    string: `The ${dl} typeof ${dl} keyword can be used to determine the type of a value.`,
    isCodeBoolArray: [false, true, false],
  },
  {
    string: `${dl} var ${dl}, ${dl} let ${dl} and ${dl} const ${dl} are all ways of declaring variables in JavaScript`, 
    isCodeBoolArray: [true, false, true, false, true, false],
  }
];

describe("mapToIsCodeObjs", () => {
  it(`should return an array with a length
      equal to the number of "groups" 
      determined by the delimiter`, () => {
    testCases.forEach(({ string, isCodeBoolArray }) => {
      const groupObjs = mapToIsCodeObjs(string, dl);
      expect(groupObjs).toHaveLength(isCodeBoolArray.length);
    });
  });

  it("should return an array of objects", () => {
    testCases.forEach(({ string }) => {
      const groupObjs = mapToIsCodeObjs(string, dl);
      expect(
        groupObjs.every(
          (groupObj) =>
            typeof groupObj === "object" && typeof groupObj !== null
        )
      );
    });
  });

  it(`each object should have an "isCode" & "string" property`, () => {
    testCases.forEach(({ string }) => {
      const groupObjs = mapToIsCodeObjs(string, dl);
      expect(
        groupObjs.every(
          (groupObj) =>
            groupObj.hasOwnProperty("isCode") &&
            groupObj.hasOwnProperty("string")
        )
      );
    });
  });

  it(`each object's "isCode" property should be type "boolean"`, () => {
    testCases.forEach(({ string }) => {
      const groupObjs = mapToIsCodeObjs(string, dl);
      expect(
        groupObjs.every((groupObj) => typeof groupObj.isCode === "boolean")
      );
    });
  });

  it(`each object's "string" property should be type "string" and should have length`, () => {
    testCases.forEach(({ string }) => {
      const groupObjs = mapToIsCodeObjs(string, dl);
      expect(
        groupObjs.every(
          (groupObj) =>
            typeof groupObj.string === "string" && groupObj.string.length
        )
      );
    });
  });

  it(`each object's isCode property is assigned the correct boolean value`, () => {
    testCases.forEach(({ string, isCodeBoolArray }) => {
      const groupObjs = mapToIsCodeObjs(string, dl);
      expect(
        groupObjs.every(
          (groupObj, i) => groupObj.isCode === isCodeBoolArray[i]
        )
      );
    });
  });
});

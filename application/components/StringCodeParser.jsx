import mapToIsCodeObjs from "../utils/mapStringToCodeRegions";

const StringCodeParser = ({ string }) => {
  return (
    <p>
      {mapToIsCodeObjs(string, "```").map((region, i) => {
        const key = `${region.string}-${i}`;
        return region.isCode ? (
          <code key={key}>{region.string}</code>
        ) : (
          <span key={key}>{region.string}</span>
        );
      })}
    </p>
  );
};

export default StringCodeParser;

import mapToIsCodeObjs from "../utils/mapStringToCodeRegions";

const StringCodeParser = ({ string }) => {
  return (
    <p>
      {mapToIsCodeObjs(string, "```").map((region) =>
        region.isCode ? <code>{region.string}</code> : <span>{region.string}</span>
      )}
    </p>
  );
};

export default StringCodeParser;

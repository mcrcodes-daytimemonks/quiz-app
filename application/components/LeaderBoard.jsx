import PropTypes from "prop-types";
import LeaderBoardEntry from "./LeaderBoardEntry";

const LeaderBoard = ({scores}) => {


  return(
    <div>
      <h3>Top Scores</h3>
      <div>Name</div>
      <div>Score</div>
      {scores.map((userScore) => (
        <div>
          <LeaderBoardEntry key={userScore._id} userScore={userScore} />
        </div>
        )
      )}
    </div>
  )
}

export default LeaderBoard;

LeaderBoard.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  )
}
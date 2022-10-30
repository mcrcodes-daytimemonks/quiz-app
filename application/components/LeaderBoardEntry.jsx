import PropTypes from "prop-types";

const LeaderBoardEntry = ({userScore}) => {

  return (
    <div>
      <div>
        {userScore.user}
      </div>
      <div>
        {userScore.score}
      </div>
    </div>
  )
}

export default LeaderBoardEntry;

LeaderBoardEntry.propTypes = {
  userScore: PropTypes.shape({
      _id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
}
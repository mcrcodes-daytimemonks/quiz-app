import PropTypes from "prop-types";
import { useRouter } from "next/router";
const categories = ["JavaScript", "HTML", "mySQL"];

const Dashboard = ({ cachedUsername, handleLogout }) => {
  const router = useRouter();

  const selectCategory = (category) => {
    console.log({ category });
    router.push(`/game/${category}`);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome, <span>{cachedUsername}</span>
      </p>
      <p>Please choose a category</p>
      {categories.map((category, i) => (
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>
      ))}
      <br />
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

Dashboard.propTypes = {
  cachedUsername: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Dashboard;

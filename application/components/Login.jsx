import PropTypes from "prop-types";

const Login = ({ username, handleUsernameChange, handleLogin }) => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Enter Your Name:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleUsernameChange}
          maxLength="35"
          value={username}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;

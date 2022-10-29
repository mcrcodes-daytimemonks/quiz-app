import PropTypes from "prop-types";
import { signIn } from "next-auth/react";

const Login = () => {

  return (
    <div>
      <p>Hey there stranger!
      <br />
      <br />
      Please sign in so that we can get to know you better!</p>
      <form onSubmit={signIn}>
        <button type="submit">Sign In</button>
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

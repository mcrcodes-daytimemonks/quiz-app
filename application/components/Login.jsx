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

export default Login;

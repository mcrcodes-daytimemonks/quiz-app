import { signIn } from "next-auth/react";
import Image from "next/image";
import { BsPatchQuestionFill } from "react-icons/bs";

const Login = () => {

  return (
    <div>
        <Image
          alt="manchester codes logo"
          className="mc-codes logo"
          height="98px"
          src="/manchester-codes-logo.svg"
          width="400vw"
        />
      <h1>Manchester Codes Community Quiz App</h1>
      <p>Hey there stranger!
      <br />
      <br />
      Please sign in so that we can get to know you better!</p>
      <form onSubmit={signIn}>
        <button type="submit" className="button primary">Sign In</button>
      </form>
    </div>
  );
};

export default Login;

import Link from "next/link";

const LoginPopup = () => {
  return (
    <div>
      <h1>LoginCTA</h1>
      <p>You need to login before you can play!</p>
      <Link href="/">Go to Login</Link>
    </div>
  );
};

export default LoginPopup;

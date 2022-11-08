import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import css from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={css.container}>
      <main className={css.main}>
        {!session ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <Dashboard />
          </>
        )}
      </main>
    </div>
  );
}

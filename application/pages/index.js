import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import css from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [storedUsername, setStoredUsername] = useState(null);
  const [username, setUsername] = useState("");

  console.log({session});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    window.dispatchEvent(new Event("username"));
    setUsername("");
  };

  const handleLogout = () => {
    localStorage.setItem("username", "");
    window.dispatchEvent(new Event("username"));
  };

  useEffect(() => {
    const gotUsername = localStorage.getItem("username");
    if (gotUsername) {
      setStoredUsername(gotUsername);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("username", () => {
      setStoredUsername(localStorage.getItem("username"));
    });

    return () =>
      window.removeEventListener("username", () =>
        setStoredUsername(localStorage.getItem("username"))
      );
  }, []);

  return (
    <div className={css.container}>
      <main className={css.main}>
        {!session ? (
          <>
            <Login
              handleLogin={handleLogin}
              handleUsernameChange={handleUsernameChange}
            />
          </>
        ) : (
          <>
            <Dashboard
              cachedUsername={storedUsername}
              handleLogout={handleLogout}
            />
          </>
        )}
      </main>
    </div>
  );
}

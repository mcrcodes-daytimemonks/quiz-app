import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import css from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [cachedUsername, setCachedUsername] = useState(null);
  const [username, setUsername] = useState("");

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
      setCachedUsername(gotUsername);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("username", () => {
      setCachedUsername(localStorage.getItem("username"));
    });

    return () =>
      window.removeEventListener("username", () =>
        setCachedUsername(localStorage.getItem("username"))
      );
  }, []);

  return (
    <div className={css.container}>
      <main className={css.main}>
        {cachedUsername ? (
          <Dashboard
            cachedUsername={cachedUsername}
            handleLogout={handleLogout}
          />
        ) : (
          <Login
            username={username}
            handleLogin={handleLogin}
            handleUsernameChange={handleUsernameChange}
          />
        )}
      </main>
    </div>
  );
}

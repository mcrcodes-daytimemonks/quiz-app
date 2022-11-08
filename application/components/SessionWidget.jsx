import css from "../styles/SessionWidget.module.css";
import { signOut, useSession } from "next-auth/react";

const SessionWidget = () => {
  const { data: session } = useSession();
  return (
    <div className={css.SessionWidget}>
      {session && (
        <>
          <p>Hey, {session.user.name}</p>
        </>
      )}
    </div>
  );
};

export default SessionWidget;

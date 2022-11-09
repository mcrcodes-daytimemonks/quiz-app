import React from "react";
import Image from "next/image";
import css from "../styles/Layout.module.css";
import SessionWidget from "./SessionWidget";
import { signOut } from "next-auth/react";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.Layout__header}>
        <div className={css.Layout__logo}>
        <Image
          alt="manchester codes logo"
          height="24px"
          src="/manchester-codes-logo.svg"
          width="100vw"
        />
        </div>
        <SessionWidget signOut={signOut} />
      </header>
      <main className={css.Layout__content}>{children}</main>
    </>
  );
};

export default Layout;

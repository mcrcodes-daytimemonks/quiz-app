import React from "react";
import Image from "next/image";
import css from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.Layout__header}>
        <Image
          alt="manchester codes logo"
          className={css.Layout__logo}
          height="24px"
          src="/manchester-codes-logo.svg"
          width="100vw"
        />
      </header>
      <main className={css.Layout__main}>
      {children}
      </main>
    </>
  );
};

export default Layout;

import Image from "next/image";
import css from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.Layout__header}>
        <Image
          src="/manchester-codes-logo.svg"
          alt="manchester codes logo"
          height="24px"
          width="100%"
        />
      </header>
      <div className={css.Layout__content}>{children}</div>
    </>
  );
};

export default Layout;

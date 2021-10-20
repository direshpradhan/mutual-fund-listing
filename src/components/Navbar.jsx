import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav className={`${styles.nav} `}>
        <Link className={`${styles.link}`} to="/">
          <h1>Mutual Funds</h1>
        </Link>
        {/* {token ? (
        <button
          className={`btn btn-primary ${styles.button_text}`}
          onClick={() => logoutUser()}
        >
          Logout
        </button>
      ) : (
        <button
          className={`btn btn-primary ${styles.button_text}`}
          onClick={() => navigate("/login")}
        >
          Login
        </button> */}
        {/* )} */}
        {/* )} */}
      </nav>
    </>
  );
};

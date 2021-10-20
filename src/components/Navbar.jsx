import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";
import styles from "./Navbar.module.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <nav className={`${styles.nav} `}>
        <Link className={`${styles.link}`} to="/">
          <h1>Mutual Funds</h1>
        </Link>
        {token && (
          <div className={styles.container}>
            <Button
              variant="outlined"
              className={`btn btn-primary ${styles.button_text}`}
              onClick={() => dispatch(logoutUser())}
            >
              Logout
            </Button>
            <AccountCircleOutlinedIcon
              onClick={() => navigate("/user")}
              fontSize="large"
            />
          </div>
        )}
      </nav>
    </>
  );
};

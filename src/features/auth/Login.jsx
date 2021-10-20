import { TextField, Button, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUser } from "./authSlice";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { token, authStatus } = useSelector((state) => state.auth);
  console.log(token, authStatus);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    token && navigate("/");
  }, [token, navigate]);

  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
        Login
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          className="input"
          {...register("email", { required: true })}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          className="input"
          {...register("password", { required: true })}
        />

        <Button type="submit" variant="contained" className="input">
          {authStatus === "loading" ? "Logging in.." : "Login"}
        </Button>
      </form>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <Typography variant="body1" sx={{ marginRight: "1rem" }}>
          OR
        </Typography>
        <Button
          variant="contained"
          className="input"
          onClick={() =>
            dispatch(
              loginUser({ email: "diresh@test.com", password: "diresh@123" })
            )
          }
        >
          Login as Guest
        </Button>
        <Button onClick={() => navigate("/signup")}>Not a user? Signup</Button>
      </Container>
    </>
  );
};

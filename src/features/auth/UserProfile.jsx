import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { updateUserData } from "./authSlice";

export const UserProfile = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { token, authStatus, user } = useSelector((state) => state.auth);
  console.log(token, authStatus, user);

  const onSubmit = (data) => {
    dispatch(updateUserData(data));
  };

  useEffect(() => {
    !token && navigate("/login");
  }, [token, navigate]);

  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
        User
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
          label="First Name"
          name="firstName"
          className="input"
          defaultValue={user?.firstName}
          {...register("firstName", { required: true })}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          name="lastName"
          className="input"
          defaultValue={user?.lastName}
          {...register("lastName", { required: true })}
        />
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          className="input"
          defaultValue={user?.email}
          {...register("email", { required: true })}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          className="input"
          required
          {...register("password", { required: true })}
        />

        <FormControl component="fieldset" className="input">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            defaultValue={user?.gender}
          >
            <FormControlLabel
              value="female"
              control={<Radio {...register("gender", { required: true })} />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio {...register("gender", { required: true })} />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio {...register("gender", { required: true })} />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" className="input">
          {authStatus === "loading" ? "Updating.." : "Update"}
        </Button>
      </form>
    </>
  );
};

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
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
import { useForm } from "react-hook-form";
import { signupUser } from "./authSlice";

export const Signup = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { token, authStatus } = useSelector((state) => state.auth);
  console.log(token, authStatus);

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    token && navigate("/");
  }, [token, navigate]);

  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
        Signup
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
          {...register("firstName", { required: true })}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          name="lastName"
          className="input"
          {...register("lastName", { required: true })}
        />
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
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              render={(props) => (
                <KeyboardDatePicker
                  disableToolBar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Date of Birth"
                  value={props.value}
                  onChange={props.onChange}
                  fullWidth
                />
              )}
              name="dob"
              control={control}
              defaultValue={null}
            />
          </MuiPickersUtilsProvider> */}

        <FormControl component="fieldset" className="input">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
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
          {authStatus === "loading" ? "Signing up.." : "Signup"}
        </Button>
      </form>
      {/* </Grid> */}
    </>
  );
};

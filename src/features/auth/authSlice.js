import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../../services/Login.services";
import { signupService } from "../../services/Signup.services";

const initialState = {
  token: JSON.parse(localStorage?.getItem("login"))?.token || null,
  user: JSON.parse(localStorage?.getItem("login"))?.user || null,
  authStatus: "idle",
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const loginResponse = await loginService(email, password);
      return loginResponse.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const signupResponse = await signupService(userDetails);
      return signupResponse.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage?.removeItem("login");
      state.token = null;
      state.authStatus = "idle";
      state.user = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log("entered fulfilled");
      state.authStatus = "fulfilled";
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage?.setItem(
        "login",
        JSON.stringify({ token: state.token, user: state.user })
      );
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload.message;
      state.authStatus = "error";
    },
    [signupUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [signupUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage?.setItem(
        "login",
        JSON.stringify({ token: state.token, user: state.user })
      );
    },
    [signupUser.rejected]: (state, action) => {
      state.error = action.payload.message;
      state.authStatus = "error";
    },
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;

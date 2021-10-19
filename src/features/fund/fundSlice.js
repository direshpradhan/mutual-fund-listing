import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  funds: [],
  status: "idle",
  error: null,
};

export const getMutualFundData = createAsyncThunk(
  "fund/getMutualFundData",
  async () => {
    const [response1, response2, response3, response4, response5] =
      await Promise.all([
        axios.get("https://api.mfapi.in/mf/107648"),
        axios.get("https://api.mfapi.in/mf/119800"),
        axios.get("https://api.mfapi.in/mf/100350"),
        axios.get("https://api.mfapi.in/mf/101282"),
        axios.get("https://api.mfapi.in/mf/100590"),
      ]);
    const response = [
      response1.data,
      response2.data,
      response3.data,
      response4.data,
      response5.data,
    ];
    return response;
  }
);

export const fundSlice = createSlice({
  name: "fund",
  initialState,
  reducers: {},
  extraReducers: {
    [getMutualFundData.pending]: (state) => {
      state.status = "loading";
    },
    [getMutualFundData.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      console.log(action.payload);
      state.funds = [...action.payload];
    },
  },
});

export default fundSlice.reducer;

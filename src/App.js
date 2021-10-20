import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { FundListing } from "./features/fund/FundListing";
import { FundDetails } from "./features/fund/FundDetails";
import { getMutualFundData } from "./features/fund/fundSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMutualFundData());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/" element={<FundListing />} />
        <Route path="/fund/:fundId" element={<FundDetails />} />
      </Routes>
    </div>
  );
}

export default App;

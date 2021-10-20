import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { FundListing } from "./features/fund/FundListing";
import { FundDetails } from "./features/fund/FundDetails";
import { getMutualFundData } from "./features/fund/fundSlice";
import { useDispatch } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Signup } from "./features/auth/Signup";
import { Login } from "./features/auth/Login";
import { UserProfile } from "./features/auth/UserProfile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMutualFundData());
  }, [dispatch]);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<FundListing />} />
        <Route path="/fund/:fundId" element={<FundDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;

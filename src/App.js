import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { FundListing } from "./features/fund/FundListing";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/" element={<FundListing />} />
      </Routes>
    </div>
  );
}

export default App;

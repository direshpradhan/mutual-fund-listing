import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<h2>Login Page</h2>} />
      </Routes>
    </div>
  );
}

export default App;

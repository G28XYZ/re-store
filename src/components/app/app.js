import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, CardPage } from "../pages";

import "./app.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
};

export default App;

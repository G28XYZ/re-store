import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, CardPage } from "../pages";
import ShopHeader from "../shop-header/shop-header";
import "./app.css";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </main>
  );
};

export default App;

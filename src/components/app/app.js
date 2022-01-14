import React from "react";
import "./app.css";
import withBookStoreService from "../hoc";

const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());
  return <div>App</div>;
};

export default withBookStoreService()(App);

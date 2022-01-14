import React from "react";
import BookList from "../book-list";
import ShoppingCardTable from "../shopping-card-table/shopping-card-table";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCardTable />
    </div>
  );
};

export default HomePage;

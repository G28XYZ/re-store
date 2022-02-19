import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./shop-header.css";

const ShopHeader = ({ items, total }) => {
  return (
    <header className="shop-header">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/card">
        <div className="shopping-cart">
          <i className="cart-icon fas fa-shopping-cart" />
          {items.length} items (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);

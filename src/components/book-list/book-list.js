import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";

import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import withBookStoreService from "../hoc";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookStoreService, booksLoaded } = this.props;
    bookStoreService.getBooks().then((data) => {
      booksLoaded(data);
    });
  }

  render() {
    const { books, loading } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

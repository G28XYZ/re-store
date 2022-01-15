import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import { booksLoaded, booksRequested, booksError } from "../../actions";
import { compose } from "../../utils";
import withBookStoreService from "../hoc";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookStoreService, booksLoaded, booksRequested, booksError } = this.props;
    booksRequested();
    bookStoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
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

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

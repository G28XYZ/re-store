import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import withBookStoreService from "../hoc";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookStoreService } = this.props;
    const data = bookStoreService.getBooks();
    console.log(data);
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
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

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

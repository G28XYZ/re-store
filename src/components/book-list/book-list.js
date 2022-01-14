import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import withBookstoreService from "../hoc";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import withBookStoreService from "../hoc";

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
      <ul>
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
  // // но можно вернуть объект вместо функции и записать проще как выше
  // return bindActionCreators(
  //   {
  //     booksLoaded,
  //   },
  //   dispatch
  // );
  // // bindActionCreators возвращает такой же объект как ниже
  // return {
  //   booksLoaded: (newBooks) => {
  //     dispatch(booksLoaded(newBooks));
  //   },
  // };
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// compose заменяет такую запись на запись выше
// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));

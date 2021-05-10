import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { books } from './books';
import Book from './Book.jsx';

function BookList() {
  return (
    <div>
      <section className="book-store-name">
        <h1><i>My Book Store</i></h1>
      </section>
      <section className="booklist">
        {books.map((book) => {  //Mapping each object from array to html component 
          return (
            <Book key={book.id} book={book}></Book>  // sending book as props
          );
        })}
      </section>
    </div>  
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))

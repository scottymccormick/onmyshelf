import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    console.log('component did the mount');
    fetch('/books')
      .then(res => res.json())
      .then(result => {
        console.log('successful /books call');
        this.setState({
          books: result.books
        })
      },
      (error) => {
        console.log('there was an error from the /books call');
        console.log(error);
      });
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <header>
          <h1 className="site-title">
            {name}
          </h1>
        </header>
        <section className="shelf-container">
          <ul className="shelf">
            {
              this.state.books.map(book => {
                return (
                  <li key={book.id} className="book">
                    <span className="book-title">
                      {book.title}
                    </span>
                    <span className="book-author">
                      {`by ${book.author}`}
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </>
    );
  }
}

export default App;
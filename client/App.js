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
      })
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
        <section>
          <ul>
            {
              this.state.books.map(book => {
                return (
                  <ul key={book.id}>{book.title}</ul>
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
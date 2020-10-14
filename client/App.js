import React, { Component } from "react";

class App extends Component {

  componentDidMount() {
    console.log('component did the mount');
    fetch('/books')
      .then(res => res.json())
      .then(result => {
        console.log('the results from the /books call');
        console.log(result);
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
        <h1>
          {name}
        </h1>
      </>
    );
  }
}

export default App;
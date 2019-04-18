import React, { Component } from "react";
import axios from 'axios';

class App extends Component {
  
  componentDidMount() {
    axios.get('/products/article')
      .then((doc) => {
        console.log(doc)
      });
  }

  render() {
    return <div></div>
  }
}

export default App;

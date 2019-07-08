import React, { Component } from "react";
import "./App.css";
import Converter from "./Converter";
import axios from "axios";

class App extends Component {
  state = {
    currencies: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://free.currconv.com/api/v7/currencies?apiKey=80017b5a4cbbbc532a33"
      // "https://free.currconv.com/api/v7/currencies?apiKey=de16d9c21e2609ca2315"
    })
      .then(response => {
        this.setState({
          currencies: Object.keys(response.data.results)
        });
      })

      .catch(error => {
        console.log("Request failed");
      });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Converter currencies={this.state.currencies} />
      </div>
    );
  }
}

export default App;
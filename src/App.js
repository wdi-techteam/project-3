import React, { Component } from "react";
import Converter from "./Converter";
import axios from "axios";
import "./App.css";
// import { Route } from "react-router-dom";


class App extends Component {
  state = {
    currencies: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://free.currconv.com/api/v7/currencies?apiKey=c88d0484f970be819447"
      // "https://free.currconv.com/api/v7/currencies?apiKey=de16d9c21e2609ca2315"
      //"https://free.currconv.com/api/v7/currencies?apiKey=80017b5a4cbbbc532a33"
    })
      .then(response => {
        //dropDown code
        // currencies dropDown code to get the id and the currencyName from the object
        let currancyData = [];
        for (let currencyKey in response.data.results) {
          currancyData.push(response.data.results[currencyKey]);
        }
        //Sorting code
        //Sort currencies By the currencyName
        currancyData.sort(function(a, b) {
          var nameA = a.currencyName.toUpperCase(); // ignore upper and lowercase
          var nameB = b.currencyName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        //Sorting code
        this.setState({
          currencies: currancyData
          //dropDown code
        });
      })

      .catch(error => {
        console.log("Request failed");
      });
  }

  render() {
    return (
      <React.Fragment>
            
              <div>
                <h1>Hello</h1>

                <Converter currencies={this.state.currencies} />
              </div>
       
      </React.Fragment>
    );
  }
}

export default App;

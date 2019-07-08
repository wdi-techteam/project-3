import React, { Component } from 'react';
import './App.css';
import Converter from './Converter'
import axios from "axios";

class App extends Component {
  state = {
    currencies: [],
    formData:{
      from:"",
      to:"",
      rate:""
    }
    
  };
  componentDidMount() {
    axios({
      method: "get",
      url: 'https://free.currconv.com/api/v7/currencies?apiKey=80017b5a4cbbbc532a33'
        // "https://free.currconv.com/api/v7/currencies?apiKey=de16d9c21e2609ca2315"
    })
      .then(response => {
        // console.log(response.data.results)
        this.setState({
          // currencies: Object.keys(response.data.results)
          currencies: Object.keys(response.data.results)
        });
        
      })

      .catch();
  }

  render() {
    return (
      <div>

      <h1>Hello</h1>
      {/* {this.state.currencies.map((currancy,index)=>(
        <Converter key={index} currency={currancy}/>

      ))} */}
      <Converter currencies={this.state.currencies}/>
      </div>
      
    )
  }

}

export default App;
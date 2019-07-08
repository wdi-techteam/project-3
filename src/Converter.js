import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";
import { getResult } from "./api";
import "./Converter.css";

class Converter extends Component {
  state = {
    formData: {
      //to get user input
      from: "",
      to: "",
      amount: 0,
      rate: 0,
      result: 0,
      toResult: false
    }
  };

  handleChange = event => {
    console.log("change");
    // get the users input
    const userInput = event.target.value;
    // get which input they typed in
    const inputName = event.target.name;
    // copy the state of formData
    const formDataCopy = Object.assign(this.state.formData);
    // update the key in formData copy with the new value
    formDataCopy[inputName] = userInput;
    // set the state with the updated formData
    this.setState({ formData: formDataCopy });
  };

  handleSubmit = event => {
    // prevent default action
    event.preventDefault();
    // get the title
    const from = this.state.formData.from;
    const to = this.state.formData.to;
    console.log(from);
    console.log(to);

    axios({
      method: "get",
      url: `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=c88d0484f970be819447`
    });
    getResult(from, to)
      .then(response => {
        const rate = `${from}_${to}`; //get the rate from api
        this.setState({
          formData: {
            from: this.state.formData.from,
            to: this.state.formData.to,
            amount: this.state.formData.amount,
            rate: `${from}_${to}`,
            result: response.data[rate] * this.state.formData.amount,
            toResult: true
          }
        });
        //const result = response.data[rate] * amount; //get the result
        // <Result output={result}/>
        console.log(this.state.result);
      })
      .catch(error => {
        console.log("Request failed");
      });
  };

  render() {
    return (
      <div className="currancyForm">
        <form onSubmit={this.handleSubmit}>
          <label> Amount </label>
          <input
            type="number"
            name="amount"
            min="0"
            pattern="[0-9]"
            value={this.state.formData.amount}
            onChange={this.handleChange}
          />
          <label> From </label>
          <select
            className="select-items"
            onChange={this.handleChange}
            name="from"
          >
            <option value="">Please Choose</option>

            {this.props.currencies.map(currency => (
              <option key={currency.id} value={currency.id}>
                {currency.id} - {currency.currencyName}
              </option>
            ))}
          </select>
          <label> To </label>
          <select
            className="select-items"
            onChange={this.handleChange}
            name="to"
          >
            <option value="">Please Choose</option>
            {this.props.currencies.map(currency => (
              <option key={currency.id} value={currency.id}>
                {currency.id} - {currency.currencyName}
              </option>
            ))}
          </select>
          <button className="submitButton" type="submit">
            {" "}
            >{" "}
          </button>
        </form>
        {this.state.formData.toResult ? (
          <Result
            output={this.state.formData.result}
            amount={this.state.formData.amount}
            from={this.state.formData.from}
            to={this.state.formData.to}
            toResult={this.state.toResult}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Converter;

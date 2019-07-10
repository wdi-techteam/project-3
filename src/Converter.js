import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";
import { getResult, getFlags } from "./api";
import "./Converter.css";


class Converter extends Component {
  state = {
    invert: false,
    formData: {
      //to get user input
      from: "",
      to: "",
      amount: 0,
      rate: 0,
      result: 0,
      toResult: false
    }
  }

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
  }

  handleSubmit = event => {
    // prevent default action
    event.preventDefault();

    let from = this.state.formData.from;
    let to = this.state.formData.to;
    if (this.state.invert) {
      let temp = "";
      temp = from;
      from = to;
      to = temp;
      this.setState({
        invert: false,
      })


    }

    console.log(from);
    console.log(to);

    axios({
      method: "get",
      url: `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=c88d0484f970be819447`

    })

    getResult(from, to)
      .then(response => {
        const rate = `${from}_${to}`; //get the rate from api
        this.setState({
          formData: {
            from: from,
            to: to,
            amount: this.state.formData.amount,
            rate: response.data[rate],
            result: response.data[rate] * this.state.formData.amount,
            toResult: true
          }
        });
      })
  }
  swapOptions = () => {
    this.setState({
      invert: true,

    })



  }

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
          {/* <label> From </label> */}
          <select id="idF"
            className="select-items"
            onChange={this.handleChange}
            name="from"

          >

            <option value="">- Convert from -</option>

            {this.props.currencies.map(currency => (
              <option name='from' key={currency.id} value={currency.id} >
                {currency.id} - {currency.currencyName}
              </option>

            ))}
            {this.state.invert ? <option selected >{this.state.formData.to}</option> : ""}
          </select>
          <button className="submitButton" id="invert" onClick={this.swapOptions}> {"<>"} </button>
          {/* <label> To </label> */}
          <select
            className="select-items"
            onChange={this.handleChange}
            name="to"
          >
            <option value="">- Convert to -</option>
            {this.props.currencies.map(currency => (
              <option name='to' key={currency.id} value={currency.id}>
                {currency.id} - {currency.currencyName}
              </option>
            ))}
            {this.state.invert ? <option selected >{this.state.formData.from}</option> : ""}
          </select>
          {/* {console.log(t.options[t.selectedIndex].text)} */}
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
            rate={this.state.formData.rate}
          />
        ) : (
            ""
          )}
      </div>
    );
  }
}

export default Converter;

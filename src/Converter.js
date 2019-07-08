import React, { Component } from "react";
import axios from "axios";

class Converter extends Component {
  state = {
    formData: {
      //to get user input
      from: "",
      to: "",
      amount: 0
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
      // amany's key= de16d9c21e2609ca2315
      // wijdan's key= 80017b5a4cbbbc532a33
      // maha's key= c88d0484f970be819447
    })
      .then(response => {
        const rate = `${from}_${to}`; //get the rate from api
        const amount = this.state.formData.amount;
        const result = response.data[rate] * amount; //get the result
        console.log(result);
      })
      .catch(error => {
        console.log("Request failed");
      });
  };

  render() {
    return (
      <div>
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
          <select onChange={this.handleChange} name="from">
            <option value="">Please Choose</option>

            {this.props.currencies.map(currency => (
              <option key={currency.id} value={currency.id}>
                {currency.id} - {currency.currencyName}
              </option>
            ))}
          </select>
          <label> To </label>
          <select onChange={this.handleChange} name="to">
            <option value="">Please Choose</option>
            {this.props.currencies.map(currency => (
              <option key={currency.id} value={currency.id}>
                {currency.id} - {currency.currencyName}
              </option>
            ))}
          </select>
          <button type="submit"> Convert </button>
        </form>
      </div>
    );
  }
}

export default Converter;

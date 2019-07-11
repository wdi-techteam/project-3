import React, { Component } from "react";
import "./Currencies.css";
import { getFlags } from "./api";

class Currencies extends Component {
  state = {
    currencies: []
  }
  componentDidMount() {
    console.log(this.props.currencies)
    let promises = this.props.currencies.map(currency => {
      return getFlags(currency.id)
    })

    Promise.all(promises.map(promise => promise.catch(e => e)))
      .then((values) => {

        const currencies = values.filter(result => !(result instanceof Error))
        console.log(currencies)
        this.setState({
          currencies: currencies.map(currency => currency.data[0])
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (

      <div className="currencies row" >
        <h1>List of all currencies</h1>
        {this.state.currencies.map(currency => (
          <div key={currency.currencies[0].code} class="column">
            <div class="card">
              <p>
                <b>
                  <img src={currency.flag} alt="flag" height="20px" width="25px" /> {currency.currencies[0].code} {currency.currencies[0].symbol}
                </b>
                <br /> {currency.currencies[0].name}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  };
}

export default Currencies;

import React from "react";
import "./Currencies.css";

function Currencies(props) {
  return (
    <div className="currencies row">
      <h1>List of all currencies</h1>
      {props.currencies.map(currency => (
        <div key={currency.id} class="column">
          <div class="card">
            <p>
              <b>
                {currency.id} {currency.currencySymbol}
              </b>
              <br /> {currency.currencyName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Currencies;

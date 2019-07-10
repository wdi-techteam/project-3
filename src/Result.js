import React, { Component } from "react";
import axios from "axios";
import "./Result.css"

class Result extends Component {
  state = {
    liveRate: []
  }
  componentDidMount() {
    axios({
      method: "get",
      url: `http://apilayer.net/api/live?access_key=2d6e17532c89b2561cff864a5c13579a&currencies=${this.props.from},${this.props.to},EUR,GBP,CAD,AUD,SAR,AED&source=USD&format=1`
    })
      .then(response => {

        this.setState({
          liveRate: response.data.quotes
        });
        // console.log(this.state.liveRate)
      })

      .catch(error => {
        console.log("Request failed");
      });

  }
  render() {
    const showData = (
      <React.Fragment>

        <h2 className='result'>
          {this.props.amount} {this.props.from} = {this.props.output.toFixed(3)}{" "} {this.props.to}
        </h2>
        <p id='rate'> 1 {this.props.from}  = {this.props.rate} {this.props.to} </p>

        <div >
          <h2 className='center'>Live Currency Rates</h2>
          <div className='table'>
            {/* <h2 className='center'>Live Currency Rates</h2> */}
            <table>
              <tr>
                <td valign="top"><table id="t01" >
                  <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                  </tr>
                  <tr>
                    <td>USD /  {this.props.from}</td>
                    <td>{this.state.liveRate['USD' + this.props.from]}</td>
                  </tr>
                  <tr>
                    <td>USD /  {this.props.to}</td>
                    <td>{this.state.liveRate['USD' + this.props.to]}</td>
                  </tr>
                  <tr>
                    <td>USD / EUR</td>
                    <td>{this.state.liveRate['USDEUR']}</td>
                  </tr>
                  <tr>
                    <td>USD / GBP</td>
                    <td>{this.state.liveRate['USDGBP']}</td>
                  </tr>
                </table>
                </td>
                <td valign="top"><table id="t01">
                  <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                  </tr>
                  <tr>
                    <td>USD / CAD</td>
                    <td>{this.state.liveRate['USDCAD']}</td>
                  </tr>
                  <tr>
                    <td>USD / AUD</td>
                    <td>{this.state.liveRate['USDAUD']}</td>
                  </tr>
                  <tr>
                    <td>USD / SAR</td>
                    <td>{this.state.liveRate['USDSAR']}</td>
                  </tr>
                  <tr>
                    <td>USD / AED</td>
                    <td>{this.state.liveRate['USDAED']}</td>
                  </tr>
                </table>
                </td>
              </tr>
            </table>
          </div>
        </div>

      </React.Fragment>
    );
    return <div>{showData}</div>;
  }
}
export default Result;

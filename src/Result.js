import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

class Result extends Component {
  render() {
    const showData = (
      <React.Fragment>
        
        <h2 class='result'>
          {this.props.amount} {this.props.from} = {this.props.output}{" "} {this.props.to}
        </h2>
        <p id='rate'> 1 {this.props.from}  = {this.props.rate} {this.props.to} </p>
      </React.Fragment>
    );
    return <div>{showData}</div>;
  }
}
export default Result;

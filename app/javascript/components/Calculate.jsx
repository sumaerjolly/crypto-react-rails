import React, { Component } from 'react';

class Calculate extends Component {
  render() {
    return (
      <div>
        <h1>How much do {this.props.activeCurrency.name} do you own</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>Enter Amount Owned:</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              name="amount"
              placeholder="How much do you own?"
              value={this.props.amount}
              className="field"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="calculate-btn"
              value="Calculate My Total"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Calculate;

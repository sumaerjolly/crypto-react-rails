import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const searchResults = this.props.searchResults.map(currency => (
      <li key={currency.id}>{currency.name}</li>
    ));
    return (
      <div>
        <h1>Crypto Porftfolio Calculator</h1>
        <form>
          <div className="form-group">
            <label>Search For Currency:</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Bitcoin, Litecoin, Eth etc"
              // value={this.props.name}
              className="field"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="currency-list">{searchResults}</div>
        </form>
      </div>
    );
  }
}

export default Search;

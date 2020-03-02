import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';
import axios from 'axios';
import Portfolio from './Portfolio';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [],
      searchResults: [],
      activeCurrency: null,
      amount: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
  }

  handleChange(e) {
    axios
      .post('/search', {
        search: e.target.value
      })
      .then(response => {
        this.setState({
          searchResults: [...response.data.currencies]
        });
      })
      .catch(error => {
        console.log('Post error', error);
      });
  }

  handleSelect(e) {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    const activeCurrency = this.state.searchResults.filter(
      item => item.id === parseInt(id)
    );
    this.setState({
      activeCurrency: activeCurrency[0],
      searchResults: []
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let currency = this.state.activeCurrency;
    let amount = this.state.amount;
    console.log(currency.id);
    console.log(amount);
    axios
      .post('/calculate', {
        id: currency.id,
        amount: amount
      })
      .then(response => {
        console.log(response);
        this.setState({
          amount: '',
          activeCurrency: null,
          portfolio: [...this.state.portfolio, response.data]
        });
      })
      .catch(error => {
        console.log('Calculate error', error);
      });
  }

  handleAmount(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const searchOrCaluclate = this.state.activeCurrency ? (
      <Calculate
        handleSubmit={this.handleSubmit}
        handleChange={this.handleAmount}
        activeCurrency={this.state.activeCurrency}
        amount={this.state.amount}
      />
    ) : (
      <Search
        handleSelect={this.handleSelect}
        searchResults={this.state.searchResults}
        handleChange={this.handleChange}
      />
    );
    return (
      <div>
        {searchOrCaluclate}
        <Portfolio portfolio={this.state.portfolio} />
      </div>
    );
  }
}

export default PortfolioContainer;

import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';
import axios from 'axios';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portolio: [],
      searchResults: [],
      activeCurrency: null,
      amount: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  render() {
    const searchOrCaluclate = this.state.activeCurrency ? (
      <Calculate />
    ) : (
      <Search
        handleSelect={this.handleSelect}
        searchResults={this.state.searchResults}
        handleChange={this.handleChange}
      />
    );
    return <div>{searchOrCaluclate}</div>;
  }
}

export default PortfolioContainer;

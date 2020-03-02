import React, { Component } from 'react';
import Search from './Search';
import Calculate from './Calculate';
import axios from 'axios';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      portolio: [],
      searchResults: [],
      activeCurrency: null,
      amount: null
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <div>
        <Search
          searchResults={this.state.searchResults}
          handleChange={this.handleChange}
        />
        <Calculate />
      </div>
    );
  }
}

export default PortfolioContainer;

import React, { Component } from 'react';
import PortfolioItems from './PortfolioItems';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const portfolioItems = this.props.portfolio.map((item, index) => (
      <PortfolioItems key={index} item={item} />
    ));
    const total = this.props.portfolio.reduce(
      (total, current) => total + current.value,
      0
    );
    return (
      <div>
        <div className="porfolio-value">
          <div className="portfolio-value--header">
            Your Total Porfolio Value is:
          </div>
          <div className="portfolio-value--content">{total}</div>
        </div>
        <div className="portfolio-items">{portfolioItems}</div>
      </div>
    );
  }
}

export default Portfolio;

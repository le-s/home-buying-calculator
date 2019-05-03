import React from "react";

class Advanced extends React.Component {
  render() {
    return (
      <div className="calculator-header__section-sizing">
        <div className="calculator-header__header">
          <span>Advanced</span>
        </div>
        <div className="calculator-header__section-inside">
          <div className="calculator-header__spacing">
            <label htmlFor="insurance">Annual Homeowner's Insurance</label>
            <span className="calculator-header__percentage">
              <input
                type="text"
                placeholder="0"
                name="insurance"
                onChange={this.props.handleInputChange}
                id="insurance"
              />
            </span>
          </div>
          <div className="calculator-header__spacing">
            <label htmlFor="fees">Monthly HOA / Condo Fees</label>
            <span className="calculator-header__dollar">
              <input
                type="text"
                placeholder="0"
                id="fees"
                name="fees"
                onChange={this.props.handleInputChange}
              />
            </span>
          </div>
          <div className="calculator-header__spacing">
            <label htmlFor="inflation">Annual General Inflation</label>
            <span className="calculator-header__percentage">
              <input
                type="text"
                defaultValue="2"
                id="inflation"
                name="inflation"
                onChange={this.props.handleInputChange}
              />
            </span>
          </div>
          <div className="calculator-header__spacing">
            <label htmlFor="savings">
              Annual Rate of Return on Savings
            </label>
            <span className="calculator-header__percentage">
              <input
                type="text"
                defaultValue="4"
                id="savings"
                name="savings"
                onChange={this.props.handleInputChange}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Advanced;

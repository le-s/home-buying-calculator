import React from 'react';
import ScoreDropdown from "./score_dropdown";

class Details extends React.Component {
  render() {
    return(
      <div className="section-sizing">
        <div className="header">
          <span>Details</span>
        </div>
        <div className="section-inside">
          <div className="spacing">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              placeholder="City, State"
              autoFocus
            />
          </div>
          <div className="spacing">
            <p>Marital Status</p>
            <div className="marital-radio-spacing" id="marital">
              <input
                type="radio"
                name="marital-status"
                value="single"
                id="single"
                defaultChecked
              />
              <label htmlFor="single">Single</label>
              <input
                type="radio"
                name="marital-status"
                value="married"
                id="married"
              />
              <label htmlFor="married">Married</label>
            </div>
          </div>
          <div className="spacing">
            <label htmlFor="annual-income">Annual Income</label>
            <div className="slider-wrapper" id="annual-income">
              <span className="dollar">
                <input
                  name="annualIncome"
                  type="text"
                  id="annualRange"
                  onChange={this.props.handleInputChange}
                  min="0"
                  max="1000000"
                  placeholder="0"
                  value={this.props.commas(this.props.formData.annualIncome)}
                />
              </span>
              <input
                name="annualIncome"
                type="range"
                min="0"
                max="1000000"
                step="1000"
                onChange={this.props.handleInputChange}
                id="annualR"
                value={this.props.formData.annualIncome}
              />
            </div>
          </div>
          <div className="spacing">
            <label htmlFor="down-payment">Down Payment</label>
            <div className="slider-wrapper" id="down-payment">
              <span className="dollar">
                <input
                  name="downPayment"
                  type="text"
                  id="downRange"
                  onChange={this.props.handleInputChange}
                  min="0"
                  max="10000000"
                  placeholder="0"
                  value={this.props.commas(this.props.formData.downPayment)}
                />
              </span>
              <input
                name="downPayment"
                type="range"
                min="0"
                max="10000000"
                step="5000"
                onChange={this.props.handleInputChange}
                id="downR"
                value={this.props.formData.downPayment}
              />
            </div>
          </div>
          <div className="spacing">
            <label htmlFor="monthlyDebt">Monthly Debt</label>
            <span className="dollar">
              <input
                name="monthlyDebt"
                type="text"
                placeholder="0"
                id="monthlyDebt"
                onChange={this.props.handleInputChange}
              />
            </span>
          </div>
          <div className="spacing">
            <label htmlFor="creditScore">Credit Score</label>
            <ScoreDropdown
              currentScore={this.props.formData.score}
              handleInputChange={this.props.handleInputChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Details;
import React from 'react';

import ScoreDropdown from './score_dropdown';

import "react-datepicker/dist/react-datepicker.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onUpdateScore = this.onUpdateScore.bind(this);
    this.handleAnnualSlider = this.handleAnnualSlider.bind(this);
    this.handleAnnualText = this.handleAnnualText.bind(this);
    this.handleDownSlider = this.handleDownSlider.bind(this);
    this.handleDownText = this.handleDownText.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.state = {
      pageType: 'calc',
      formData: {
        score: '760'
      },
    };
  }

  onUpdateScore(e) {
    this.setState({
      formData: {
        usState: e.target.value
      }
    });
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ pageType: 'result' })
  }

  numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  handleAnnualSlider() {
    document.getElementById("annualRange").value = this.numberWithCommas(document.getElementById("annualR").value);
  }

  handleAnnualText() {
    document.getElementById("annualR").value = document.getElementById("annualRange").value.toLocaleString();
  }

  handleDownSlider() {
    document.getElementById("downRange").value = this.numberWithCommas(document.getElementById("downR").value);
  }

  handleDownText() {
    document.getElementById("downR").value = document.getElementById("downRange").value;
  }

  render() {
    let displayPage;
    if (this.state.pageType === 'calc') {
      displayPage = <div className="header-calc-wrapper">
        <div className="header-title">
          <h1>What kind of home can I buy?</h1>
        </div>
        <div className="nav-calc">
          <form onSubmit={this.handleSubmit} className="form-wrapper">
            <div className="calc-wrapper">
                <div className="section-sizing">
                  <div className="header">
                    <span>Details</span>
                  </div>
                  <div className="section-inside">
                    <div className="spacing">
                      <label>Location</label>
                      <input type="text" placeholder="San Jose, CA" />
                    </div>
                    <div className="spacing">
                      <label>Marital Status</label>
                      <div className="marital-radio-spacing">
                        <input type="radio" name="marital-status" value="single" defaultChecked /> Single
                        <input type="radio" name="marital-status" value="married" /> Married
                      </div>
                    </div>
                    <div className="spacing">
                      <label>Annual Income</label>
                      <div className="slider-wrapper">
                        <span className="dollar"><input type="text" id="annualRange" onInput={this.handleAnnualText} min="0" max="1000000" placeholder="0"/></span>
                        <input type="range" min="0" max="1000000" step="1000" defaultValue="0" onInput={this.handleAnnualSlider} id="annualR"/>
                      </div>
                    </div>
                    <div className="spacing">
                      <label>Down Payment</label>
                      <div className="slider-wrapper">
                        <span className="dollar"><input type="text" id="downRange" onInput={this.handleDownText} min="0" max="10000000" placeholder="0"/></span>
                        <input type="range" min="0" max="10000000" step="5000" defaultValue="0" onInput={this.handleDownSlider} id="downR"/>
                      </div>
                    </div>
                    <div className="spacing">
                      <label>Monthly Debt</label>
                      <span className="dollar"><input type="text" placeholder="0" /></span>
                    </div>
                    <div className="spacing">
                      <label>Credit Score</label>
                      <ScoreDropdown currentScore={this.state.formData.score} onUpdateScore={this.onUpdateScore} />
                    </div>
                  </div>
                </div>
                <div className="section-sizing">
                  <div className="header">
                    <span>Advanced</span>
                  </div>
                  <div className="section-inside">
                    <div className="spacing">
                      <label>Annual Homeowner's Insurance</label>
                    <span className="percentage"><input type="text" placeholder="0" /></span>
                    </div>
                    <div className="spacing">
                      <label>Monthly HOA / Condo Fees</label>
                      <span className="dollar"><input type="text" placeholder="0" /></span>
                    </div>
                    <div className="spacing">
                      <label>Annual General Inflation</label>
                      <span className="percentage"><input type="text" placeholder="0" /></span>
                    </div>
                    <div className="spacing">
                      <label>Annual Rate of Return on Savings</label>
                      <span className="percentage"><input type="text" placeholder="0" /></span>
                    </div>
                  </div>
                </div>
            </div>
            <div className="format-button">
              <input className="button-blue" type="submit" value="Calculate" />
            </div>
          </form>
        </div>
      </div>
    } else if (this.state.pageType === 'result'){
      displayPage = <div>
        this is the results page
      </div>
    }
    return (
      <div>
        {displayPage}
      </div>
    );
  }
}

export default Calc;
import React from 'react';

import Calculator from './calculator_form';
import Result from './result';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onUpdateScore = this.onUpdateScore.bind(this);
    this.handleAnnualSlider = this.handleAnnualSlider.bind(this);
    this.handleAnnualText = this.handleAnnualText.bind(this);
    this.handleDownSlider = this.handleDownSlider.bind(this);
    this.handleDownText = this.handleDownText.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.state = {
      pageType: 'calc',
      formData: {
        maritalStatus: 'single',
        annualIncome: '0',
        downPayment: '0',
        monthlyDebt: '0',
        score: '0',
        insurance: '0',
        fees: '0',
        inflation: '2',
        savings: '4'
      },
    };
  }

  onUpdateScore(e) {
    this.setState({
      formData: {
        score: e.target.value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ 
      pageType: 'result',
      formData: {
        maritalStatus: document.querySelector('input[name="marital-status"]:checked').value,
        annualIncome: document.getElementById("annualR").value,
        downPayment: document.getElementById("downR").value,
        monthlyDebt: document.getElementById("monthlyDebt").value,
        score: document.getElementById("creditScore").value,
        insurance: document.getElementById("insurance").value,
        fees: document.getElementById("fees").value,
        inflation: document.getElementById("inflation").value,
        savings: document.getElementById("savings").value,
      }
    })
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      pageType: 'calc',
      formData: {

      }
    })
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
      displayPage = <Calculator submit={this.handleSubmit} annualSlider={this.handleAnnualSlider} annualText={this.handleAnnualText} downSlider={this.handleDownSlider} downText={this.handleDownText} updateScore={this.onUpdateScore} state={this.state}/>
      
    } else if (this.state.pageType === 'result'){
      displayPage = <Result formData={this.state.formData} commas={this.numberWithCommas} reset={this.handleReset}/>
    }
    return (
      <div>
        {displayPage}
      </div>
    );
  }
}

export default Calc;
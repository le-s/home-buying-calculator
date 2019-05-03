import React from 'react';

import Calculator from './calculator_form';
import Result from './result';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      pageType: "calc",
      formData: {
        maritalStatus: "single",
        annualIncome: "0",
        downPayment: "0",
        monthlyDebt: "0",
        score: "760",
        insurance: "0",
        fees: "0",
        inflation: "2",
        savings: "4"
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      pageType: "result",
    });
    console.log(this.state);
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      pageType: "calc",
      formData: {
        maritalStatus: "single",
        annualIncome: "0",
        downPayment: "0",
        monthlyDebt: "0",
        score: "760",
        insurance: "0",
        fees: "0",
        inflation: "2",
        savings: "4"
      }
    });
  }

  numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  handleInputChange(e) {
    e.preventDefault();
    const target = e.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    if (target.type === 'text') {
      if (isNaN(target.value)) {
        // alert('Please enter a number');
        // debugger
        let error;
        if (!document.getElementById("error")) {
          error = document.createElement("div");
          error.classList.add("calculator-header--error");
          error.setAttribute("id", "error");
          error.textContent = "Please enter a valid number";
          document.getElementById(target.id).after(error);
        }
      } else {
        if (document.getElementById("error")) {
          document.getElementById("error").remove();
        }
        return this.setState({
          formData: Object.assign({}, this.state.formData, {
            [name]: target.value
          })
        });
      }
    }

    return this.setState({
      formData: Object.assign({}, this.state.formData, {
        [name]: target.value
      })
    });
  }

  render() {
    let displayPage;
    if (this.state.pageType === "calc") {
      displayPage = (
        <Calculator
          handleInputChange={this.handleInputChange}
          submit={this.handleSubmit}
          formData={this.state.formData}
          commas={this.numberWithCommas}
        />
      );
    } else if (this.state.pageType === "result") {
      displayPage = (
        <Result
          formData={this.state.formData}
          commas={this.numberWithCommas}
          reset={this.handleReset}
        />
      );
    }
    return <div>{displayPage}</div>;
  }
}

export default Calc;
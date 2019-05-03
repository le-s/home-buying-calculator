import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div>
        <div className="header-calc-wrapper">
          <div className="nav-calc">
            <div className="calc-wrapper">
              <span className="result-header">
                <div className="home-image"></div>
                You can afford a $
                {this.props.commas(
                  Math.round(this.props.formData.annualIncome * 2.5)
                )}{" "}
                home!
              </span>
              <div className="result-section-sizing">
                <div className="header">
                  <span>Mortgage Payment</span>
                  <span>
                    $
                    {this.props.commas(
                      Math.round(
                        this.props.formData.annualIncome * 2.5 * 0.0055
                      )
                    )}
                  </span>
                </div>
                <div className="section-inside">
                  <div className="spacing">
                    <p>Estimated Other Costs</p>
                    <p>${this.props.formData.monthlyDebt}</p>
                  </div>
                  <div className="spacing">
                    <p>Total Payment</p>
                    <p>
                      $
                      {this.props.commas(
                        Math.round(
                          parseInt(this.props.formData.annualIncome * 2.5 * 0.0055) + 
                          parseInt(this.props.formData.monthlyDebt)
                        )
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="result-section-sizing">
                <div className="header">
                  <span>Down Payment</span>
                  <span>$
                    {this.props.commas(this.props.formData.downPayment)}
                    </span>
                </div>
                <div className="section-inside">
                  <div className="spacing">
                    <p>Closing Costs</p>
                    <p>
                      ${this.props.commas(Math.round(this.props.formData.downPayment / 2))}
                    </p>
                  </div>
                  <div className="spacing">
                    <p>Cash Reserve</p>
                    <p>
                      ${this.props.commas(Math.round(this.props.formData.downPayment / 3))}
                    </p>
                  </div>
                  <hr />
                  <div className="spacing">
                    <p>Recommended Savings</p>
                    <p>
                      $
                      {this.props.commas(
                        parseInt(this.props.formData.downPayment) +
                          parseInt(
                            Math.round(this.props.formData.downPayment / 2)
                          ) +
                          parseInt(
                            Math.round(this.props.formData.downPayment / 3)
                          )
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="result-section-sizing round-bottom">
                <div className="header">
                  <span>Mortgage Amount</span>
                  <span>$
                    {this.props.commas(
                      Math.round(
                        parseInt(this.props.formData.annualIncome * 2.5) - 
                        parseInt(this.props.formData.downPayment)
                      )
                    )}
                  </span>
                </div>
                <div className="section-inside">
                  <div className="spacing">
                    <p>Type</p>
                    <p>30 yr Fixed FHA</p>
                  </div>
                  <div className="spacing">
                    <p>Interest</p>
                    <p>{this.props.formData.inflation}%</p>
                  </div>
                  <div className="spacing">
                    <p>APR</p>
                    <p>{this.props.formData.savings}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="format-button">
          <button className="button-blue" onClick={this.props.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Result;
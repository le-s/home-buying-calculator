import React from 'react';

const HOME_IMG_URL =
  "http://www.newdesignfile.com/postpic/2012/06/black-white-home-icon_280130.png";

class Result extends React.Component {
  render() {
    return (
      <div>
        <div className="calculator-header">
          <div className="calculator-header__nav-calc">
            <div className="calculator-header__calc-wrapper">
              <span className="result-header">
                <img
                  src={HOME_IMG_URL}
                  alt="home"
                  className="result-header__home-image"
                />
                You can afford a $
                {this.props.commas(
                  Math.round(this.props.formData.annualIncome * 2.5)
                )}{" "}
                home!
              </span>
              <div className="result-section-sizing">
                <div className="calculator-header__header">
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
                <div className="calculator-header__section-inside">
                  <div className="calculator-header__spacing">
                    <p>Estimated Other Costs</p>
                    <p>${this.props.formData.monthlyDebt}</p>
                  </div>
                  <div className="calculator-header__spacing">
                    <p>Total Payment</p>
                    <p>
                      $
                      {this.props.commas(
                        Math.round(
                          parseInt(
                            this.props.formData.annualIncome * 2.5 * 0.0055
                          ) + parseInt(this.props.formData.monthlyDebt)
                        )
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="result-section-sizing">
                <div className="calculator-header__header">
                  <span>Down Payment</span>
                  <span>
                    ${this.props.commas(this.props.formData.downPayment)}
                  </span>
                </div>
                <div className="calculator-header__section-inside">
                  <div className="calculator-header__spacing">
                    <p>Closing Costs</p>
                    <p>
                      $
                      {this.props.commas(
                        Math.round(this.props.formData.downPayment / 2)
                      )}
                    </p>
                  </div>
                  <div className="calculator-header__spacing">
                    <p>Cash Reserve</p>
                    <p>
                      $
                      {this.props.commas(
                        Math.round(this.props.formData.downPayment / 3)
                      )}
                    </p>
                  </div>
                  <hr />
                  <div className="calculator-header__spacing">
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
                <div className="calculator-header__header">
                  <span>Mortgage Amount</span>
                  <span>
                    $
                    {this.props.commas(
                      Math.round(
                        parseInt(this.props.formData.annualIncome * 2.5) -
                          parseInt(this.props.formData.downPayment)
                      )
                    )}
                  </span>
                </div>
                <div className="calculator-header__section-inside">
                  <div className="calculator-header__spacing">
                    <p>Type</p>
                    <p>30 yr Fixed FHA</p>
                  </div>
                  <div className="calculator-header__spacing">
                    <p>Interest</p>
                    <p>{this.props.formData.inflation}%</p>
                  </div>
                  <div className="calculator-header__spacing">
                    <p>APR</p>
                    <p>{this.props.formData.savings}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator-header__format-button">
          <button
            className="calculator-header__button-blue"
            onClick={this.props.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Result;
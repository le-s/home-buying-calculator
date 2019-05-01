import React from 'react';

import DatePicker from 'react-datepicker'
import StateDropdown from './state_dropdown';

import "react-datepicker/dist/react-datepicker.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.dropdownChanged = this.dropdownChanged.bind(this);
    this.onUpdateUSState = this.onUpdateUSState.bind(this);
    this.state = {
      pageType: 'calc',
      formData: {
        usState: 'CA'
      },
      startDate: new Date(),
      states: 'CA',
    };
  }

  onUpdateUSState(e) {
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

  dropdownChanged(e) {
    this.setState({ states: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ pageType: 'result' })
  }

  render() {
    let displayPage;
    if (this.state.pageType === 'calc') {
      displayPage = <div className="header-calc-wrapper">
        <div className="calc-nav">
          <div className="header-element">
            Salary Paycheck Calculator
          </div>
        </div>
        <div className="nav-calc">
          <form onSubmit={this.handleSubmit} className="form-wrapper">
            <div className="calc-wrapper">
                <div className="section-sizing">
                  <div className="header">
                    <span>Select Calculation date and state</span>
                  </div>
                  <div className="section-inside">
                    <div className="spacing">
                      <label>Check Date</label>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDateChange}
                      />
                    </div>
                    <div className="spacing">
                      <label>State for withholding</label>
                      <StateDropdown currentUSState={this.state.formData.usState} onUpdateUSState={this.onUpdateUSState} />
                    </div>
                  </div>
                </div>
                <div className="section-sizing">
                  <div className="header">
                    <span>General Information</span>
                  </div>
                  <div className="section-inside">
                    <div className="spacing">
                      <label>Gross Pay</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div className="spacing">
                      <label>Gross Pay Type</label>
                      <select name="pay-type">
                        <option value="Anually">Anually</option>
                        <option value="Period">Pay Per Period</option>
                      </select>
                    </div>
                    <div className="spacing">
                      <label>Gross Salary YTD</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div className="spacing">
                      <label>Pay Frequency</label>
                      <select name="pay-frequency">
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-weekly">Bi-weekly</option>
                        <option value="Semi-monthly">Semi-monthly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Semi-annually">Semi-annually</option>
                        <option value="Anually">Anually</option>
                      </select>
                    </div>
                    <div className="spacing">
                      <label>Federal Filing Status</label>
                      <select name="filing-status">
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Married Use Single Rate">
                          Married Use Single Rate
                        </option>
                        <option value="Nonresident Alien">Nonresident Alien</option>
                      </select>
                    </div>
                    <div className="spacing">
                      <label># of Federal Allowances</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div className="spacing">
                      <label>Additional Federal Withholding</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div className="spacing">
                      <label>Round Federal Withholding</label>
                      <div>
                        <input type="radio" name="withholding" value="yes" /> Yes
                        <input type="radio" name="withholding" value="no" defaultChecked /> No
                      </div>
                    </div>
                    <div className="spacing">
                      <label>I am exempt from</label>
                      <div>
                        <input type="checkbox" value="Federal" /> Federal Tax
                        <input type="checkbox" value="FICA" /> FICA
                        <input type="checkbox" value="Medicare" /> Medicare
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-sizing">
                  <div className="header">
                    <span>State and Local Information</span>
                  </div>
                  <div className="section-inside">
                    <div className="spacing">
                      <label>Regular allownaces</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div className="spacing">
                      <label>California SDI</label>
                      <div>
                        <input type="radio" name="SDI" value="Yes" defaultChecked /> Yes
                        <input type="radio" name="SDI" value="No" /> No
                      </div>
                    </div>
                    <div className="spacing">
                      <label>Exempt State</label>
                      <div>
                        <input type="radio" name="exempt" value="Yes" /> Yes
                        <input type="radio" name="exempt" value="No" defaultChecked /> No
                      </div>
                    </div>
                    <div className="spacing">
                      <label>Filing Status</label>
                      <select name="filing">
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Head of Household">Head of Household</option>
                      </select>
                    </div>
                    <div className="spacing">
                      <label>Additional State Withholding</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div className="spacing">
                      <label>Additional Allowances</label>
                      <input type="text" placeholder="0" />
                    </div>
                    <div className="spacing">
                      <label>Supplemental Type</label>
                      <select name="supplemental">
                        <option value="Bonus">BONUS</option>
                        <option value="Commission">COMMISSION</option>
                        <option value="None">NONE</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="section-sizing">
                  <div className="header">
                    <span>Voluntary Deduction Section</span>
                  </div>
                  <div className="section-inside">
                    <div className="spacing">
                      <label>Deduction Name</label>
                      <input type="text" />
                    </div>
                    <div className="spacing">
                      <label>Deduction Amount</label>
                      <input type="text" />
                    </div>
                    <div className="spacing">
                      <label>Deduction Type</label>
                      <select name="deduction">
                        <option value="Gross">% of Gross Pay</option>
                        <option value="Net">% of Net Pay</option>
                        <option value="Fixed">$ Fixed Amount</option>
                        <option value="Hourly"># Hourly Rate</option>
                      </select>
                    </div>
                    <div className="spacing">
                      <label>Ded. Exempt from</label>
                      <div>
                        <input type="checkbox" value="Federal" /> Federal
                        <input type="checkbox" value="Fica" /> Fica
                        <input type="checkbox" value="State" /> State
                        <input type="checkbox" value="Local" /> Local
                      </div>
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
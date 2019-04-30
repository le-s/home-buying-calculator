import React from 'react';

// import Date from './date';
// import Info from './info';
// import State from './state';
// import Deduction from './deduction';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="section-sizing">
            <div className="header">
              <span>Select Calculation date and state</span>
            </div>
            <div className="section-inside">
              <div>
                <label>Check Date</label>
                <select name="" id="" />
              </div>
              <div>
                <label>State for withholding</label>
                <select name="states">
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="header">
              <span>General Information</span>
            </div>
            <div className="section-inside">
              <div>
                <label>Gross Pay</label>
                <input type="text" placeholder="0" />
              </div>
              <div>
                <label>Gross Pay Type</label>
                <select name="pay-type">
                  <option value="Anually">Anually</option>
                  <option value="Period">Pay Per Period</option>
                </select>
              </div>
              <div>
                <label>Gross Salary YTD</label>
                <input type="text" placeholder="0"/>
              </div>
              <div>
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
              <div>
                <label>Federal Filing Status</label>
                <select name="filing-status">
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Married Use Single Rate">Married Use Single Rate</option>
                  <option value="Nonresident Alien">Nonresident Alien</option>
                </select>
              </div>
              <div>
                <label># of Federal Allowances</label>
                <input type="text" placeholder="0"/>
              </div>
              <div>
                <label>Additional Federal Withholding</label>
                <input type="text" placeholder="0"/>
              </div>
              <div>
                <label>Round Federal Withholding</label>
                <div>
                  <input type="radio" name="withholding" value="yes"/> Yes
                  <input type="radio" name="withholding" value="no" checked/> No
                </div>
              </div>
              <div>
                <label>I am exempt from</label>
                <div>
                  <input type="checkbox" value="Federal"/> Federal Tax
                  <input type="checkbox" value="FICA"/> FICA
                  <input type="checkbox" value="Medicare"/> Medicare
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="header">
              <span>State and Local Information</span>
            </div>
            <div className="section-inside">
              <div>
                <label>Regular allownaces</label>
                <input type="text" placeholder="0"/>
              </div>
              <div>
                <label>California SDI</label>
                <div>
                  <input type="radio" name="SDI" value="Yes" checked/> Yes
                  <input type="radio" name="SDI" value="No"/> No
                </div>
              </div>
              <div>
                <label>Exempt State</label>
                <div>
                  <input type="radio" name="exempt" value="Yes"/> Yes
                  <input type="radio" name="exempt" value="No" checked/> No
                </div>
              </div>
              <div>
                <label>Filing Status</label>
                <select name="filing">
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Head of Household">Head of Household</option>
                </select>
              </div>
              <div>
                <label>Additional State Withholding</label>
                <input type="text" placeholder="0"/>
              </div>
              <div>
                <label>Additional Allowances</label>
                <input type="text" placeholder="0"/>
              </div>
              <div>
                <label>Supplemental Type</label>
                <select name="supplemental">
                  <option value="Bonus">BONUS</option>
                  <option value="Commission">COMMISSION</option>
                  <option value="None">NONE</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="header">
              <span>Voluntary Deduction Section</span>
            </div>
            <div className="section-inside">
              <div>
                <label>Deduction #1 Name</label>
                <input type="text"/>
              </div>
              <div>
                <label>Deduction #1 Amount</label>
                <input type="text"/>
              </div>
              <div>
                <label>Deduction #1 Type</label>
                <select name="deduction">
                  <option value="Gross">% of Gross Pay</option>
                  <option value="Net">% of Net Pay</option>
                  <option value="Fixed">$ Fixed Amount</option>
                  <option value="Hourly"># Hourly Rate</option>
                </select>
              </div>
              <div>
                <label>Ded. #1 Exempt from</label>
                <div>
                  <input type="checkbox" value="Federal"/> Federal
                  <input type="checkbox" value="Fica"/> Fica
                  <input type="checkbox" value="State"/> State
                  <input type="checkbox" value="Local"/> Local
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Calc;
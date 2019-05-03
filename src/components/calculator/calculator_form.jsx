import React from 'react';

import Details from './details';
import Advanced from './advanced';

class CalculatorForm extends React.Component {

  render() {
    return (
      <div className="header-calc-wrapper">
        <div className="header-title">
          <h1>What kind of home can I buy?</h1>
        </div>
        <div className="nav-calc">
          <form onSubmit={this.props.submit} className="form-wrapper">
            <div className="calc-wrapper">
              <Details
                handleInputChange={this.props.handleInputChange}
                commas={this.props.commas}
                formData={this.props.formData}
              />
              <Advanced handleInputChange={this.props.handleInputChange} />
            </div>
            <div className="format-button">
              <input
                className="button-blue"
                type="submit"
                value="Calculate"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CalculatorForm;
import React from 'react';

import Details from './details';
import Advanced from './advanced';

class CalculatorForm extends React.Component {

  render() {
    return (
      <div className="calculator-header">
        <h1 className="calculator-header__title">
          What kind of home can I buy?
        </h1>
        <div className="calculator-header__nav-calc">
          <form
            onSubmit={this.props.submit}
            className="calculator-header__form-wrapper"
          >
            <div className="calculator-header__calc-wrapper">
              <Details
                handleInputChange={this.props.handleInputChange}
                commas={this.props.commas}
                formData={this.props.formData}
              />
              <Advanced handleInputChange={this.props.handleInputChange} />
            </div>
            <div className="calculator-header__format-button">
              <input
                className="calculator-header__button-blue"
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
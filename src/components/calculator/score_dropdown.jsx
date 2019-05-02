import React from 'react';

class ScoreDropdown extends React.Component {
  render() {
    return(
      <div className="styled-select semi-square">
        <select name="credit-score" value={this.props.currentScore} onChange={this.props.onUpdateScore} id="creditScore">
          <option value="760">Excellent (760+)</option>
          <option value="740">Excellent (740-759)</option>
          <option value="720">Very Good (720-739)</option>
          <option value="700">Good (700-719)</option>
          <option value="680">Above Average (680-699)</option>
          <option value="660">Average (660-679)</option>
          <option value="640">Fair (640-659)</option>
          <option value="620">Needs Improvement (620-639)</option>
          <option value="580">Poor (580-619)</option>
          <option value="579">Poor (Below 580)</option>
        </select>
      </div>
    )
  }
}

export default ScoreDropdown;
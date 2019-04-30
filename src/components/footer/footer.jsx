import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="footer-wrapper">
        <label>FISCAL HIVE ASSIGNMENT 2019</label>
        <div>
          <label className="dont-click">ABOUT FISCAL HIVE | </label>
          <label className="dont-click">PRIVACY POLICY | </label>
          <label className="dont-click">TERMS & CONDITIONS | </label>
          <label className="dont-click">CONTACT US | </label>
          <label className="dont-click">PRESS ENQUIRES</label>
        </div>
      </div>
    )
  }
}

export default Footer;
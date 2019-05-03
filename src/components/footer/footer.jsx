import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="footer-wrapper">
        <label>FISCAL HIVE ASSIGNMENT 2019</label>
        <div>
          <label className="footer-wrapper__dont-click">ABOUT FISCAL HIVE | </label>
          <label className="footer-wrapper__dont-click">PRIVACY POLICY | </label>
          <label className="footer-wrapper__dont-click">TERMS & CONDITIONS | </label>
          <label className="footer-wrapper__dont-click">CONTACT US | </label>
          <label className="footer-wrapper__dont-click">PRESS ENQUIRES</label>
        </div>
      </div>
    )
  }
}

export default Footer;
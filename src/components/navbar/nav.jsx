import React from 'react';
import '../../stylesheets/nav.css';

class NavBar extends React.Component {

  render() {
    let nav = (
      <div>
        <div className="navbar">
          <div className="logo-wrapper">
            <div className="logo"></div>
            <div className="nav-elements-wrapper">
              <div className="nav-elements">Calculator</div>
            </div>
          </div>
          <div className="profile-wrapper">
            Steven L.
            <div className="profile-image"></div>
          </div>
        </div>
        <div className="calc-nav">
          <div className="header-element">
            Salary Paycheck Calculator
          </div>
        </div>
      </div>
    )

    return (
      <div>
        {nav}
      </div>
    )
  }
}

export default NavBar;


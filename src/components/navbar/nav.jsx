import React from 'react';

class NavBar extends React.Component {

  render() {
    let nav = (
      <div>
        <div className="navbar">
          <div className="navbar__logo-wrapper">
            <div className="navbar__logo-wrapper__logo" />
            <div className="navbar__logo-wrapper__nav-elements-wrapper">
              <div className="navbar__logo-wrapper__nav-elements-wrapper__nav-elements">
                Calculator
              </div>
            </div>
          </div>
          <div className="navbar__profile-wrapper">
            Steven L.
            <div className="navbar__profile-wrapper__profile-image" />
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {nav}
      </div>
    )
  }
}

export default NavBar;


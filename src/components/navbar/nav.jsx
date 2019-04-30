import React from 'react';
import '../../stylesheets/nav.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nav = (
      <div className="navbar">
        <div>
          <div className="logo"></div>
          <div className="nav-elements">Calculator</div>
        </div>
        <div>
          Profile
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


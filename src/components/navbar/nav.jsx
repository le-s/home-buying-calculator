import React from 'react';
import '../../stylesheets/nav.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nav = (
      <div className="navbar">
        hello
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


import React from 'react';

const LOGO_IMG_URL =
  "https://static.wixstatic.com/media/9324b7_7f4699ff479543cc8fd29225b747b6a7~mv2_d_2122_1533_s_2.png/v1/crop/x_0,y_355,w_2122,h_823/fill/w_225,h_85,al_c,q_80,usm_0.66_1.00_0.01/9324b7_7f4699ff479543cc8fd29225b747b6a7~mv2_d_2122_1533_s_2.webp";

const PROFILE_IMG_URL =
  "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png";

class NavBar extends React.Component {

  render() {
    let nav = (
      <div className="navbar">
        <div className="navbar__links">
          <img src={LOGO_IMG_URL} alt="logo" className="navbar__logo"/>
          <div className="navbar__nav-elements-wrapper">
            <div className="navbar__nav-elements">
              Calculator
            </div>
          </div>
        </div>
        <div className="navbar__profile-wrapper">
          Steven L.
          <img src={PROFILE_IMG_URL} alt="profile" className="navbar__profile-image"/>
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


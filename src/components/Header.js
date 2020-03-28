import React, { Component } from 'react';
import portrait from '../img/cl-portrait.jpg';

class Navbar extends Component {
  render() {
    return (
      <header class="header">
        <div class="container">
          <a href="#">
            <img src={portrait} alt="Portrait" className="avatar"/>
          </a>
          <div className="avatar__caption">
            <h1 className="header__title">Caleb Lee</h1>
            <p className="header__subtitle">Web Developer</p>
            <p className="header__location">Nashville, TN</p>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar;
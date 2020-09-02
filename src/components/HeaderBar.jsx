import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderBar extends Component {
  render() {
    return(
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className='navbar-brand'>Zoo</div>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
              <Link to='/'>
                Animales
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <Link to='/who'>
                Quienes somos?
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderBar;
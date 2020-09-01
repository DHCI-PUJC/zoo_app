import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderBar extends Component {
  render() {
    return(
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <div className='navbar-brand'>Zoo</div>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <div class="nav-link">
              <Link to='/'>
                Animales
              </Link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
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
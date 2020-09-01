import React, { Component } from 'react';

class HeaderBar extends Component {
  render() {
    return(
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='navbar-brand'>Zoo</div>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <div class="nav-link">Animales</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">¿Quiénes somos?</div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderBar;
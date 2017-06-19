import React from 'react';
import { NavLink, IndexLink } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <div className="nav-left">
        <ul>
          <li className="website-name">React Weather</li>
          <li><NavLink exact to='/' activeClassName="active">Get Weather</NavLink></li>
          <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
          <li><NavLink to='/examples' activeClassName="active">Examples</NavLink></li>
        </ul>
      </div>
      <div className="nav-right">
        <span>Igor Orszanski</span>
      </div>
    </nav>
  );
}

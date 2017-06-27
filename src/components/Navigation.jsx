import React from 'react';
import { NavLink, IndexLink } from 'react-router-dom';

export default React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Forecast</li>
            <li><NavLink exact to='/' activeClassName="active">Get Weather</NavLink></li>
            <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
            <li><NavLink to='/examples' activeClassName="active">Examples</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.handleSubmit}>
            <ul className="menu">
              <li><input type="text" placeholder="City" /></li>
              <li><button type="submit" className="button">Get weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  },
});

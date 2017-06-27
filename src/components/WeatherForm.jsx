import React from 'react';

export default React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();
    let city = this.city.value;
    if (city.length > 0) {
      this.props.handleSearch(city);
      this.city.value = '';
    } else {
      const message = "please type in city";
      this.props.handleError(message);
    }
  },
  render: function () {
    return (
      <form className="weather-query" onSubmit={this.handleSubmit}>
        <input type="text" ref={(city) => this.city = city} placeholder="Enter city name" />
        <button className="button hollow expanded">Get weather</button>
      </form>
    );
  },
});

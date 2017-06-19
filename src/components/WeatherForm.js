import React from 'react';

export default React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();
    let city = this.city.value;
    if (city.length > 0) {
      this.props.handleSearch(city);
      this.city.value = '';
    }
  },
  render: function () {
    return (
      <form className="weather-query" onSubmit={this.handleSubmit}>
        <input type="text" ref={(city) => this.city = city} placeholder="Enter city name" />
        <button>Get weather</button>
      </form>
    );
  },
});

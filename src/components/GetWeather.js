import React from 'react';
import WeatherForm from 'weatherform';
import WeatherResult from 'weatherresult';
import { handleSearchFetch, handleSearchAxios } from 'weatherapi';

export default React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    }
  },
  handleSearch: function (city) {
    var that = this;
    handleSearchFetch(city)
      .then(function (response) {
        that.setState({
          temp: response.main.temp,
          city: response.name,
        });
      }).catch(function (err) {
        console.log(err);
      });
  },
  handleSearchAlt: function (city) {
    this.setState({
      isLoading: true,
    });
    // debugger;
    var that = this;
    setTimeout(function () {
      handleSearchAxios(city)
        .then(function (response) {
          that.setState({
            temp: response.data.main.temp,
            city: response.data.name,
            isLoading: false,
          });
        }).catch(function (err) {
          console.log(err);
        });
    }, 1000);

  },
  render: function () {
    let { city, temp, isLoading } = this.state
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm handleSearch={this.handleSearchAlt} />
        <WeatherResult city={city} temp={temp} isLoading={isLoading} />
      </div>
    );
  },
});

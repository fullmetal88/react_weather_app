
import React from 'react';
import WeatherForm from 'weatherform';
import WeatherResult from 'weatherresult';
import Modal from 'modal';
import { handleSearchFetch, handleSearchAxios } from 'weatherapi';
import queryString from 'query-string';

export default React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      error: false,
      errorMessage: null,
    }
  },
  componentDidMount: function () {
    const city = queryString.parse(this.props.location.search).city;
    if (city) {
      this.handleSearchAlt(city);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (props) {
    const city = queryString.parse(props.location.search).city;
    if (city) {
      this.handleSearchAlt(city);
      window.location.hash = '#/';
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
      error: false,
      errorMessage: null,
    });
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
          that.setState({
            isLoading: false,
            error: true,
            errorMessage: err.message,
          });
        });
    }, 1000);
  },
  handleError: function (message) {
    this.setState({
      error: true,
      errorMessage: message,
    });
  },
  render: function () {
    const { city, temp, isLoading, errorMessage } = this.state;
    const modal = this.state.error ? <Modal message={errorMessage} /> : '';
    return (
      <div>
        {modal}
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm city={city} handleSearch={this.handleSearchAlt} handleError={this.handleError} />
        <WeatherResult city={city} temp={temp} isLoading={isLoading} />
      </div>
    );
  },
});

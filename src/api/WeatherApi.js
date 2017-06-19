import axios from 'axios';

const apiKey = 'b7065bf819c7e1ad6a76a9c8699d5617';

const handleSearchFetch = function (city) { 
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(function (response) {
      return response.json();
    })
};


const handleSearchAxios = function (city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(function (response) {
      return response;
    })
};

export { handleSearchFetch, handleSearchAxios };
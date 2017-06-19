import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from 'main';
import Navigation from 'navigation';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  },
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.querySelector('#app')
);



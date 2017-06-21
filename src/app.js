import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from 'main';
import Navigation from 'navigation';

import styles from 'foundation-sites/dist/css/foundation.min.css';
$(document).foundation();
// import stylesNative from '../dist/style.css';

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

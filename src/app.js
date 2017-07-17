import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Main from 'main';
import Navigation from 'navigation';

import styles from 'foundationStyles';
import main from 'customStyles';
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
  <HashRouter>
    <App />
  </HashRouter>, document.querySelector('#app')
);

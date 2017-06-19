import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GetWeather from 'getweather';
import About from 'about';
import Examples from 'examples';

export default () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={GetWeather} />
        <Route path='/about' component={About} />
        <Route path='/examples' component={Examples} />
      </Switch>
    </main>
  );
}

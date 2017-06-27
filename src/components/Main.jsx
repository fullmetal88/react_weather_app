import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GetWeather from 'getweather';
import About from 'about';
import Examples from 'examples';

export default () => {
  return (
    <main className="row">
      <div className="small-12 medium-6 large-6 small-centered columns">
      <Switch>
        <Route exact path='/' component={GetWeather} />
        <Route path='/about' component={About} />
        <Route path='/examples' component={Examples} />
      </Switch>
      </div>
    </main>
  );
}

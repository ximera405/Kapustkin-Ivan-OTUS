import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Weather } from './components/weather/weather';
import { Navigation } from './components/Navigation/Navigation';
import { MainPage } from './components/MaiiPAge/MainPage';
import { TopWeather } from './components/weather/TopWeather';
import { WeatherInfo } from './components/weather/WeatherInfo';

export const App = hot(module)(() => (
  <BrowserRouter>
    <Route path="/" component={Navigation} />
    <Route exact path="/main" component={MainPage} />
    <Route exact path="/top" component={TopWeather} />
    <Route exact path="/list" component={Weather} />
    <Route path={`/list/:id`} render={() => <WeatherInfo />} />
  </BrowserRouter>
));

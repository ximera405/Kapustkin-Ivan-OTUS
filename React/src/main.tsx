import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Weather } from 'App/components/weather/weather';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'App/redux/redux-store';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Weather />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

import { combineReducers } from 'redux';
import { RootState } from 'App/reducers/state';
import weatherReducer from "./weather-reducer"
import { reducer as reducerForm } from 'redux-form';

export { RootState };

export const rootReducers = combineReducers<RootState>({
  weather: weatherReducer as any,
  form: reducerForm as any
});

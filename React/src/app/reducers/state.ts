import {
  WeatherModel,
} from 'app/models';
import { reducer } from 'redux-form';

export namespace RootState {
  export type WeatherState = WeatherModel;
  export type reducerForm = typeof reducer;
}

export interface RootState {
  weather: RootState.WeatherState;
  form: RootState.reducerForm;
}

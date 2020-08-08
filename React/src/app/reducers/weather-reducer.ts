import { WeatherModel } from 'App/models';
import { handleActions } from 'redux-actions';
import { RootState } from 'App/reducers/state';
import { WeatherActions } from 'App/actions';

let initialState: RootState.WeatherState = {
  weatherList: [{
    id: 1,
    city: "Москва",
    isRain: false,
    temperature: 25,
    wind: "8м/c"
  },
  {
    id: 2,
    city: "Железногорск",
    isRain: false,
    temperature: 21,
    wind: "10м/c"
  },
  {
    id: 3,
    city: "Сочи",
    isRain: false,
    temperature: 32,
    wind: "12м/c"
  },
  {
    id: 4,
    city: "Нижний Новгород",
    isRain: true,
    temperature: 18,
    wind: "15м/c"
  }]
};

export const accountReducer = handleActions<RootState.WeatherState, WeatherModel>(
  {
    [WeatherActions.Type.CREATE_CITY_WEATHER]: (state: any, action: any) => {
      return {
        ...state,
      };
    }
  },
  initialState
);

export default accountReducer;

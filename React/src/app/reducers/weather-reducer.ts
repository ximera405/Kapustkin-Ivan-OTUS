import { WeatherModel } from 'App/models';
import { handleActions } from 'redux-actions';
import { RootState } from 'App/reducers/state';
import { WeatherActions } from 'App/actions';

let initialState: RootState.WeatherState = {
  weatherList: [
    {
      id: 1,
      city: "Москва",
      isRain: false,
      temperature: 25,
      wind: "8м/c"
    },
    {
      id: 2,
      city: "Нижний Новгород",
      isRain: false,
      temperature: 22,
      wind: "7м/c"
    },
    {
      id: 3,
      city: "Курск",
      isRain: false,
      temperature: 25,
      wind: "13м/c"
    },
    {
      id: 4,
      city: "Питер",
      isRain: true,
      temperature: 25,
      wind: "8м/c"
    },
    {
      id: 5,
      city: "Магадан",
      isRain: true,
      temperature: 18,
      wind: "18м/c"
    },
    {
      id: 6,
      city: "Орел",
      isRain: false,
      temperature: 27,
      wind: "10м/c"
    },
    {
      id: 7,
      city: "Воронеж",
      isRain: false,
      temperature: 28,
      wind: "6м/c"
    }
  ],
  topWeatherList: []
};

export const accountReducer = handleActions<RootState.WeatherState, WeatherModel>(
  {
    [WeatherActions.Type.CREATE_CITY_WEATHER]: (state: any, action: any) => {
      return {
        ...state,
      };
    },
    [WeatherActions.Type.LIST_CITIES_WEATHER]: (state: any, action: any) => {
      return {
        ...state,
        weatherList: action.payload as any
      };
    },
    [WeatherActions.Type.SET_TOP_CITY_WEATHER]: (state: any, action: any) => {
      return {
        ...state,
        topWeatherList: [...state.topWeatherList, { ...action.payload }]
      };
    },
    [WeatherActions.Type.DELETE_TOP_CITY_WEATHER]: (state, action: any) => {
      return {
        ...state,
        topWeatherList: state.topWeatherList.filter((i: any) => i.id !== Number(action.payload))
      };
    },
  },
  initialState
);

export default accountReducer;

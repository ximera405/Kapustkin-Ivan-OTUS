import { WeatherModel } from 'App/models';
import { createAction } from 'redux-actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from 'App/reducers';
import { AnyAction } from 'redux';
import { WeatherReq } from 'App/services/weatherService';

export namespace WeatherActions {
  export enum Type {
    CREATE_CITY_WEATHER = 'CREATE_CITY_WEATHER',
    LIST_CITIES_WEATHER = 'LIST_CITIES_WEATHER',
    SET_TOP_CITY_WEATHER = 'TOP_CITY_WEATHER',
    DELETE_TOP_CITY_WEATHER = 'DELETE_TOP_CITY_WEATHER'
  }

  export const createCityWeather = createAction<WeatherModel>(Type.CREATE_CITY_WEATHER);
  export const listCitiesWeather = createAction<WeatherModel>(Type.LIST_CITIES_WEATHER);
  export const favoriteCityWeather = createAction<WeatherModel>(Type.SET_TOP_CITY_WEATHER);
  export const deleteFavoriteCityWeather = createAction<WeatherModel>(Type.DELETE_TOP_CITY_WEATHER);

  export const getCityWeatherTC = (
    cityName: string
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
  ): Promise<void> => {
    let response: any = await WeatherReq({ cityName });
    if (response.data.success === true) {
      dispatch(listCitiesWeather(response.weather));
    } else {
      alert("something went wrong")
    }
  };
}

export type WeatherActions = Omit<typeof WeatherActions, 'Type'>;

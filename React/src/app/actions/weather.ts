import { WeatherModel } from 'App/models';
import { createAction } from 'redux-actions';

export namespace WeatherActions {
  export enum Type {
    CREATE_CITY_WEATHER = 'CREATE_CITY_WEATHER'
  }

  export const createCityWeather = createAction<WeatherModel>(Type.CREATE_CITY_WEATHER);
}

export type WeatherActions = Omit<typeof WeatherActions, 'Type'>;

import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'App/reducers';
import { omit } from '../utils';
import { Dispatch, bindActionCreators } from 'redux';
import { WeatherActions } from 'App/actions';

interface IProps {
  topWeatherList: any;
  actionsWeather: any;
}

const TopWeatherComponent = (props: IProps) => {
  const onClickDeleteTop = (evt: any) => {
    props.actionsWeather.deleteFavoriteCityWeather(evt.currentTarget.id);
  };
  return (
    <div>
      <h2>Ваши избранные города: </h2>
      {props.topWeatherList.map((weath: any) => {
        return (
          <div key={weath.id + 100}>
            <h2>Город: {weath.city}</h2>
            <p>Идет ли сейчас дождь? - {weath.isRain === true ? 'Да' : 'Нет'}</p>
            <p>Температура воздуха: {weath.temperature}</p>
            <p>Скорость ветра: {weath.wind}</p>
            <button id={weath.id} onClick={onClickDeleteTop}>
              Удалить из избранного
            </button>
          </div>
        );
      })}
    </div>
  );
};

export const TopWeather = connect(
  (state: RootState): Pick<IProps, 'weatherList' & 'topWeatherList'> => {
    return {
      weatherList: state.weather.weatherList,
      topWeatherList: state.weather.topWeatherList
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'actionsWeather'> => {
    return {
      actionsWeather: bindActionCreators(omit(WeatherActions, 'Type'), dispatch)
    };
  }
)(TopWeatherComponent) as any;

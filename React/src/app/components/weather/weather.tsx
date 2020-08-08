import React, { useState } from 'react';
import { WeatherModel } from 'App/models';
import { connect } from 'react-redux';
import { RootState } from 'App/reducers/state';

interface IProps {
  weather: WeatherModel;
}

export const WeatherComponent = (props: IProps) => {
  let [top, setTop] = useState([
    {
      id: 1,
      city: "Москва",
      isRain: false,
      temperature: 25,
      wind: "8м/c"
    }
  ]);

  const onCliclAddToTop = (evt: any) => {
    let curentCity = props.weather.weatherList.filter((weath: any) => weath.id === Number(evt.currentTarget.id));
    setTop(curentCity)
  };

  const onClickDeleteTop = (evt: any) => {
    setTop(top.filter((weath: any) => weath.id !== Number(evt.currentTarget.id)))
  }

  const divStyle = {
    display: 'flex',
    'flex-wrap': 'wrap',
    width: '100%',
    'justifyContent': 'space-between'
  };
  return (
    <div>
      {top.length > 0 && (
        <div>
          <p>Избранное: </p>
          {top.map((weath: any) => {
            return (
              <div key={weath.id + 100}>
                <h2>Город: {weath.city}</h2>
                <p>Идет ли сейчас дождь? - {weath.isRain === true ? "Да" : "Нет"}</p>
                <p>Температура воздуха: {weath.temperature}</p>
                <p>Скорость ветра: {weath.wind}</p>
                <button id={weath.id} onClick={onClickDeleteTop}>Удалить из избранного</button>
              </div>
            );
          })}
        </div>
      )}

      <div style={divStyle}>
        {props.weather.weatherList.map((weath: any) => {
          return (
            <div key={weath.id}>
              <h2>Город: {weath.city}</h2>
              <p>Идет ли сейчас дождь? - {weath.isRain === true ? "Да" : "Нет"}</p>
              <p>Температура воздуха: {weath.temperature}</p>
              <p>Скорость ветра: {weath.wind}</p>
              <button id={weath.id} onClick={onCliclAddToTop}>Добавить в избранное</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Weather = connect(
  (state: RootState): Pick<IProps, 'weather'> => {
    return {
      weather: state.weather
    };
  }
)(WeatherComponent) as any;

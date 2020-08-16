import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'App/reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from '../utils';
import { WeatherActions } from 'App/actions';
import { H1 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export namespace WeatherInfoInterfaces {
  export interface IProps {
    actionsWeather: any;
    weatherList: any;
  }
  export interface IState {
    currentCityId: number;
  }
}

class WeatherInfoComponent extends React.Component<
  WeatherInfoInterfaces.IProps,
  WeatherInfoInterfaces.IState
> {
  public state: WeatherInfoInterfaces.IState = {
    currentCityId: 0
  };

  componentDidMount() {
    const id = Number(window.location.pathname.split('/')[2]);
    this.setState({
      currentCityId: id
    });
  }

  render() {
    return (
      <div>
        <Link to="/list">Назад</Link>
        {this.state.currentCityId !== 0 && (
          <div>
            <H1>{this.props.weatherList[this.state.currentCityId].city}</H1>
            <div>
              <h2>Город: {this.props.weatherList[this.state.currentCityId].city}</h2>
              <p>
                Идет ли сейчас дождь? -{' '}
                {this.props.weatherList[this.state.currentCityId].isRain === true ? 'Да' : 'Нет'}
              </p>
              <p>
                Температура воздуха: {this.props.weatherList[this.state.currentCityId].temperature}
              </p>
              <p>Скорость ветра: {this.props.weatherList[this.state.currentCityId].wind}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const WeatherInfo = connect(
  (state: RootState): Pick<WeatherInfoInterfaces.IProps, 'weatherList' & 'topWeatherList'> => {
    return {
      weatherList: state.weather.weatherList
    };
  },
  (dispatch: Dispatch): Pick<WeatherInfoInterfaces.IProps, 'actionsWeather'> => {
    return {
      actionsWeather: bindActionCreators(omit(WeatherActions, 'Type'), dispatch)
    };
  }
)(WeatherInfoComponent) as any;

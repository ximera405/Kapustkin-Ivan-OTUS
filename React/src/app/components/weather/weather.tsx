import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'App/reducers/state';
import { Dispatch, bindActionCreators } from 'redux';
import { omit } from '../utils';
import { WeatherActions } from 'App/actions';
import { Column, Table, Cell, SelectionModes } from '@blueprintjs/table';
import { H1, Button, ButtonGroup } from '@blueprintjs/core';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

interface IProps {
  weatherList: any;
  actionsWeather: any;
}

interface IState {
  currentWeatherId: number;
}

class WeatherComponent extends React.PureComponent<IProps, IState> {
  public state: IState = {
    currentWeatherId: 0
  };

  // onCLickMoreInfo = () => {
  //   this.props.actionsUsers.isUserFieldsActive(false);
  // };

  render() {
    return (
      <>
        {this.props.weatherList.length !== 0 && (
          <div>
            <H1>Список городов</H1>
            <section>
              <ButtonGroup className="button-group" minimal={true}>
                {this.state.currentWeatherId !== 0 && (
                  <div>
                    <Button onClick={this.onClickAddToTop} icon="add">
                      Добавить в избранное
                    </Button>
                    <NavLink to={`/list/${this.state.currentWeatherId}`}>
                      <Button icon="more">Полная информация</Button>
                    </NavLink>
                  </div>
                )}
              </ButtonGroup>

              <Table
                columnWidths={[200, 200, 200, 200]}
                enableRowHeader={false}
                numRows={this.props.weatherList.length}
                selectionModes={SelectionModes.COLUMNS_AND_CELLS && SelectionModes.ROWS_AND_CELLS}
                enableMultipleSelection={false}
                onSelection={this.onValueSelection}
                enableColumnResizing={false}
                enableRowResizing={false}
                selectedRegionTransform={(e) => {
                  return { rows: e.rows };
                }}
              >
                <Column name="Город" cellRenderer={this.cityCellRenderer} />
                <Column name="Дождь" cellRenderer={this.rainCellRenderer} />
                <Column name="Температура" cellRenderer={this.tempCellRenderer} />
                <Column name="Скорость ветра" cellRenderer={this.windCellRenderer} />
              </Table>
            </section>
          </div>
        )}
      </>
    );
  }

  cityCellRenderer = (rowIndex: number, columnIndex: number) => (
    <Cell>{this.props.weatherList[rowIndex].city}</Cell>
  );

  rainCellRenderer = (rowIndex: number, columnIndex: number) => (
    <Cell>{this.props.weatherList[rowIndex].isRain === true ? 'Да' : 'Нет'}</Cell>
  );

  tempCellRenderer = (rowIndex: number, columnIndex: number) => (
    <Cell>{this.props.weatherList[rowIndex].temperature}</Cell>
  );

  windCellRenderer = (rowIndex: number, columnIndex: number) => (
    <Cell>{this.props.weatherList[rowIndex].wind}</Cell>
  );

  onClickAddToTop = () => {
    let curentCity = this.props.weatherList.filter(
      (weath: any) => weath.id === this.state.currentWeatherId
    );
    this.props.actionsWeather.favoriteCityWeather(curentCity[0]);
    alert('Город успешно добавлен в избранное');
  };

  onValueSelection = (rows: any) => {
    let cellValue = rows[0].rows[0];
    let weatherId = this.props.weatherList[cellValue].id;
    this.setState({
      currentWeatherId: weatherId
    });
  };
}

export const Weather = connect(
  (state: RootState): Pick<IProps, 'weatherList' & 'topWeatherList'> => {
    return {
      weatherList: state.weather.weatherList
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'actionsWeather'> => {
    return {
      actionsWeather: bindActionCreators(omit(WeatherActions, 'Type'), dispatch)
    };
  }
)(WeatherComponent) as any;

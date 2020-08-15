export interface WeatherModel {
  weatherList: {
    id: number;
    city: string;
    isRain: boolean;
    temperature: number;
    wind: string;
  }[];

  topWeatherList: {
    id: number;
    city: string;
    isRain: boolean;
    temperature: number;
    wind: string;
  }[]
}

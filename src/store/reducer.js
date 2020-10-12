import _ from 'lodash';
import * as actionTypes from './actions';
import weather from '../apis/weather';

export const initialState = {
	temperature: '',
	weekForecast: [],
	latitude: 33.8,
	longitude: 151.2
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  	case actionTypes.GET_WEATHER:
			const now = new Date();
			const monthNow = now.getMonth() + 1;
			const dayWeek1 = now.getDate() + 1;
			const dayWeek2 = now.getDate() + 2;
			const dayWeek3 = now.getDate() + 3;
			const dayWeek4 = now.getDate() + 4;
			const dayWeek5 = now.getDate() + 5;
			const dayWeek6 = now.getDate() + 6;
			const day1 = { monthNow: monthNow, dayOfWeek: dayWeek1, temperature: action.temperature1, precipitation: action.precipitation1, humidity: action.humidity1, wind: action.wind1, windDirection: action.windDirection1};
			const day2 = { monthNow: monthNow, dayOfWeek: dayWeek2, temperature: action.temperature2, precipitation: action.precipitation2, humidity: action.humidity2, wind: action.wind2, windDirection: action.windDirection2};
			const day3 = { monthNow: monthNow, dayOfWeek: dayWeek3, temperature: action.temperature3, precipitation: action.precipitation3, humidity: action.humidity3, wind: action.wind3, windDirection: action.windDirection3};
			const day4 = { monthNow: monthNow, dayOfWeek: dayWeek4, temperature: action.temperature4, precipitation: action.precipitation4, humidity: action.humidity4, wind: action.wind4, windDirection: action.windDirection4};
			const day5 = { monthNow: monthNow, dayOfWeek: dayWeek5, temperature: action.temperature5, precipitation: action.precipitation5, humidity: action.humidity5, wind: action.wind5, windDirection: action.windDirection5};
			const day6 = { monthNow: monthNow, dayOfWeek: dayWeek6, temperature: action.temperature6, precipitation: action.precipitation6, humidity: action.humidity6, wind: action.wind6, windDirection: action.windDirection6};
			return {
				...state,
				temperature: action.temperature,
				precipitation: action.precipitation,
				humidity: action.humidity,
				wind: action.wind,
				windDirection: action.windDirection,
				weekForecast: _.concat(day1, day2, day3, day4, day5, day6)
			};
    default:
      return state;
  }
};

export default reducer;

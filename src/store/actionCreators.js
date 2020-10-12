import * as actionTypes from './actions';
import weather from '../apis/weather';

export const getWeather = (lat, lng) => async dispatch => {
	const response = await weather.get(`/weather/point?lat=${lat}&lng=${lng}`, {
		headers: {
			//please swap this out for your own API- as soon as you confirm your email for a free account they show you it
			//only 50 requests per day, add more and switch them out:
			"Authorization": "<stormglass.io API key>"
		}
	});
	//didn't want to make these global objects to make DRY, but open to further instructions:
  const day1temp = response.data.hours[39].airTemperature[0].value;
	const day1precip = response.data.hours[39].precipitation[0].value;
	const day1humidity = response.data.hours[39].humidity[0].value;
	const day1wind = response.data.hours[39].windSpeed[0].value;
	const day1windDir = response.data.hours[39].windDirection[0].value;
  const day2temp = response.data.hours[63].airTemperature[0].value;
	const day2precip = response.data.hours[63].precipitation[0].value;
	const day2humidity = response.data.hours[63].humidity[0].value;
	const day2wind = response.data.hours[63].windSpeed[0].value;
	const day2windDir = response.data.hours[63].windDirection[0].value;
  const day3temp = response.data.hours[87].airTemperature[0].value;
	const day3precip = response.data.hours[87].precipitation[0].value;
	const day3humidity = response.data.hours[87].humidity[0].value;
	const day3wind = response.data.hours[87].windSpeed[0].value;
	const day3windDir = response.data.hours[87].windDirection[0].value;
  const day4temp = response.data.hours[111].airTemperature[0].value;
	const day4precip = response.data.hours[111].precipitation[0].value;
	const day4humidity = response.data.hours[111].humidity[0].value;
	const day4wind = response.data.hours[111].windSpeed[0].value;
	const day4windDir = response.data.hours[111].windDirection[0].value;
  const day5temp = response.data.hours[135].airTemperature[0].value;
	const day5precip = response.data.hours[135].precipitation[0].value;
	const day5humidity = response.data.hours[135].humidity[0].value;
	const day5wind = response.data.hours[135].windSpeed[0].value;
	const day5windDir = response.data.hours[135].windDirection[0].value;
  const day6temp = response.data.hours[159].airTemperature[0].value;
	const day6precip = response.data.hours[159].precipitation[0].value;
	const day6humidity = response.data.hours[159].humidity[0].value;
	const day6wind = response.data.hours[159].windSpeed[0].value;
	const day6windDir = response.data.hours[159].windDirection[0].value;
	dispatch({
		type: actionTypes.GET_WEATHER,
		temperature: response.data.hours[15].airTemperature[0].value,
		precipitation: response.data.hours[15].precipitation[0].value,
		humidity: response.data.hours[15].humidity[0].value,
		wind: response.data.hours[15].windSpeed[0].value,
		windDirection: response.data.hours[15].windDirection[0].value,
		//they don't have pollen: pollen: response.data.hours[15].
				temperature1: day1temp,
				precipitation1: day1precip,
				humidity1: day1humidity,
				wind1: day1wind,
				windDirection1: day1windDir,
				temperature2: day2temp,
				precipitation2: day2precip,
				humidity2: day2humidity,
				wind2: day2wind,
				windDirection2: day2windDir,
				temperature3: day3temp,
				precipitation3: day3precip,
				humidity3: day3humidity,
				wind3: day3wind,
				windDirection3: day3windDir,
				temperature4: day4temp,
				precipitation4: day4precip,
				humidity4: day4humidity,
				wind4: day4wind,
				windDirection4: day4windDir,
				temperature5: day5temp,
				precipitation5: day5precip,
				humidity5: day5humidity,
				wind5: day5wind,
				windDirection5: day5windDir,
				temperature6: day6temp,
				precipitation6: day6precip,
				humidity6: day6humidity,
				wind6: day6wind,
				windDirection6: day6windDir
	})
}

export const getWeatherDefault = (lat, lng) => async dispatch => {
	const response = await weather.get('/weather/point?lat=-37.8&lng=144.9', {
		headers: {
			//please swap this out for your own API- as soon as you confirm your email for a free account they show you it
			//only 50 requests per day, add more and switch them out:
			"Authorization": "<stormglass.io API key>"
		}
	});
  const day1temp = response.data.hours[39].airTemperature[0].value;
	const day1precip = response.data.hours[39].precipitation[0].value;
	const day1humidity = response.data.hours[39].humidity[0].value;
	const day1wind = response.data.hours[39].windSpeed[0].value;
	const day1windDir = response.data.hours[39].windDirection[0].value;
  const day2temp = response.data.hours[63].airTemperature[0].value;
	const day2precip = response.data.hours[63].precipitation[0].value;
	const day2humidity = response.data.hours[63].humidity[0].value;
	const day2wind = response.data.hours[63].windSpeed[0].value;
	const day2windDir = response.data.hours[63].windDirection[0].value;
  const day3temp = response.data.hours[87].airTemperature[0].value;
	const day3precip = response.data.hours[87].precipitation[0].value;
	const day3humidity = response.data.hours[87].humidity[0].value;
	const day3wind = response.data.hours[87].windSpeed[0].value;
	const day3windDir = response.data.hours[87].windDirection[0].value;
  const day4temp = response.data.hours[111].airTemperature[0].value;
	const day4precip = response.data.hours[111].precipitation[0].value;
	const day4humidity = response.data.hours[111].humidity[0].value;
	const day4wind = response.data.hours[111].windSpeed[0].value;
	const day4windDir = response.data.hours[111].windDirection[0].value;
  const day5temp = response.data.hours[135].airTemperature[0].value;
	const day5precip = response.data.hours[135].precipitation[0].value;
	const day5humidity = response.data.hours[135].humidity[0].value;
	const day5wind = response.data.hours[135].windSpeed[0].value;
	const day5windDir = response.data.hours[135].windDirection[0].value;
  const day6temp = response.data.hours[159].airTemperature[0].value;
	const day6precip = response.data.hours[159].precipitation[0].value;
	const day6humidity = response.data.hours[159].humidity[0].value;
	const day6wind = response.data.hours[159].windSpeed[0].value;
	const day6windDir = response.data.hours[159].windDirection[0].value;
	dispatch({
		type: actionTypes.GET_WEATHER,
		temperature: response.data.hours[15].airTemperature[0].value,
		precipitation: response.data.hours[15].precipitation[0].value,
		humidity: response.data.hours[15].humidity[0].value,
		wind: response.data.hours[15].windSpeed[0].value,
		windDirection: response.data.hours[15].windDirection[0].value,
		//they don't have pollen: pollen: response.data.hours[15].
				temperature1: day1temp,
				precipitation1: day1precip,
				humidity1: day1humidity,
				wind1: day1wind,
				windDirection1: day1windDir,
				temperature2: day2temp,
				precipitation2: day2precip,
				humidity2: day2humidity,
				wind2: day2wind,
				windDirection2: day2windDir,
				temperature3: day3temp,
				precipitation3: day3precip,
				humidity3: day3humidity,
				wind3: day3wind,
				windDirection3: day3windDir,
				temperature4: day4temp,
				precipitation4: day4precip,
				humidity4: day4humidity,
				wind4: day4wind,
				windDirection4: day4windDir,
				temperature5: day5temp,
				precipitation5: day5precip,
				humidity5: day5humidity,
				wind5: day5wind,
				windDirection5: day5windDir,
				temperature6: day6temp,
				precipitation6: day6precip,
				humidity6: day6humidity,
				wind6: day6wind,
				windDirection6: day6windDir
	})
}

export const getWeatherFahrenheit = (lat, lng) => async dispatch => {
	const response = await weather.get(`/weather/point?lat=${lat}&lng=${lng}`, {
		headers: {
			//please swap this out for your own API- as soon as you confirm your email for a free account they show you it
			//only 50 requests per day, add more and switch them out:
			"Authorization": "<stormglass.io API key>"
		}
	});
	const tempC = response.data.hours[15].airTemperature[0].value;
	const temp = Math.round((tempC * 1.8) + 32);
  const day1tempC = response.data.hours[39].airTemperature[0].value;
	const day1temp = Math.round((day1tempC * 1.8) + 32);
	const day1precip = response.data.hours[39].precipitation[0].value;
	const day1humidity = response.data.hours[39].humidity[0].value;
	const day1wind = response.data.hours[39].windSpeed[0].value;
	const day1windDir = response.data.hours[39].windDirection[0].value;
  const day2tempC = response.data.hours[63].airTemperature[0].value;
	const day2temp = Math.round((day2tempC * 1.8) + 32);
	const day2precip = response.data.hours[63].precipitation[0].value;
	const day2humidity = response.data.hours[63].humidity[0].value;
	const day2wind = response.data.hours[63].windSpeed[0].value;
	const day2windDir = response.data.hours[63].windDirection[0].value;
  const day3tempC = response.data.hours[87].airTemperature[0].value;
	const day3temp = Math.round((day3tempC * 1.8) + 32);
	const day3precip = response.data.hours[87].precipitation[0].value;
	const day3humidity = response.data.hours[87].humidity[0].value;
	const day3wind = response.data.hours[87].windSpeed[0].value;
	const day3windDir = response.data.hours[87].windDirection[0].value;
  const day4tempC = response.data.hours[111].airTemperature[0].value;
	const day4temp = Math.round((day4tempC * 1.8) + 32);
	const day4precip = response.data.hours[111].precipitation[0].value;
	const day4humidity = response.data.hours[111].humidity[0].value;
	const day4wind = response.data.hours[111].windSpeed[0].value;
	const day4windDir = response.data.hours[111].windDirection[0].value;
  const day5tempC = response.data.hours[135].airTemperature[0].value;
	const day5temp = Math.round((day5tempC * 1.8) + 32);
	const day5precip = response.data.hours[135].precipitation[0].value;
	const day5humidity = response.data.hours[135].humidity[0].value;
	const day5wind = response.data.hours[135].windSpeed[0].value;
	const day5windDir = response.data.hours[135].windDirection[0].value;
  const day6tempC = response.data.hours[159].airTemperature[0].value;
	const day6temp = Math.round((day6tempC * 1.8) + 32);
	const day6precip = response.data.hours[159].precipitation[0].value;
	const day6humidity = response.data.hours[159].humidity[0].value;
	const day6wind = response.data.hours[159].windSpeed[0].value;
	const day6windDir = response.data.hours[159].windDirection[0].value;
	dispatch({
		type: actionTypes.GET_WEATHER,
		temperature: temp,
		precipitation: response.data.hours[15].precipitation[0].value,
		humidity: response.data.hours[15].humidity[0].value,
		wind: response.data.hours[15].windSpeed[0].value,
		windDirection: response.data.hours[15].windDirection[0].value,
		//they don't have pollen: pollen: response.data.hours[15].
				temperature1: day1temp,
				precipitation1: day1precip,
				humidity1: day1humidity,
				wind1: day1wind,
				windDirection1: day1windDir,
				temperature2: day2temp,
				precipitation2: day2precip,
				humidity2: day2humidity,
				wind2: day2wind,
				windDirection2: day2windDir,
				temperature3: day3temp,
				precipitation3: day3precip,
				humidity3: day3humidity,
				wind3: day3wind,
				windDirection3: day3windDir,
				temperature4: day4temp,
				precipitation4: day4precip,
				humidity4: day4humidity,
				wind4: day4wind,
				windDirection4: day4windDir,
				temperature5: day5temp,
				precipitation5: day5precip,
				humidity5: day5humidity,
				wind5: day5wind,
				windDirection5: day5windDir,
				temperature6: day6temp,
				precipitation6: day6precip,
				humidity6: day6humidity,
				wind6: day6wind,
				windDirection6: day6windDir
	})
}
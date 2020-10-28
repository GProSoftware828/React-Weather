import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
//import UniqueId from 'react-html-id'; this will randomly stop working- others are better
import {Today} from './Components/Today';
import {WeekDays} from './Components/WeekDays';
import {Week} from './Components/Week';
import './App.css';
import {
  getWeather,
	getWeatherDefault,
	getWeatherFahrenheit
} from './store/actionCreators';

export class App extends React.Component {
  constructor(props) {
    super(props);
    //UniqueId.enableUniqueIds(this);
    this.state = {
			address: '',
			city: '',
			tempLabel: 'C',
			degreesC: true
    };
  }

  componentDidMount() {
		this.props.getWeatherDefault();
		const latitudeDefault = -37.814;
		const longitudeDefault = 144.96332;
		const latlongDefault = `${latitudeDefault},${longitudeDefault}`;
		this.reverseGeo(latlongDefault, 'C');
  }
	
	//Google Maps Reverse Geo Lookup:
	reverseGeo = (x, y) => {
		fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&latlng=${x}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
				"x-rapidapi-key": "<rapidAPI key>",
				"useQueryString": true
			}
		})
		.then(response => response.json())
		.then(response => {
			this.setState({city: response.results[6].address_components[0].long_name});
			this.setState({tempLabel: y});
		})
	}
	
	//Google Maps Geo Lookup:
	mapLookup = (x) => {
    const encodedAddress = encodeURI(this.state.address)
	  //Google Maps Geo Lookup:
    fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedAddress}`, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
        "x-rapidapi-key": "<rapidAPI key>"
        }
    })
    .then(response => response.json())
    .then(response => {
			const lat = Math.round(response.results[0].geometry.location.lat * 10) / 10;
			const lng = Math.round(response.results[0].geometry.location.lng * 10) / 10;
			const latitude = response.results[0].geometry.location.lat;
			const longitude = response.results[0].geometry.location.lng;
			const latlong = `${latitude},${longitude}`;
			if (this.state.degreesC)
			{
				this.props.getWeather(lat, lng);
				this.reverseGeo(latlong, 'C');
			}
			if (!this.state.degreesC)
			{
				this.props.getWeatherFahrenheit(lat, lng);
				this.reverseGeo(latlong, 'F');
			}
    })
    .catch(err => console.log(err));
	}
	
  updateCoordinates = (e) => {
		e.preventDefault();
		this.mapLookup();
	  }
	
	switchDegreeHandler = () => {
    this.setState(prevState => {
      return { degreesC: !prevState.degreesC };
    });
  };

  render() {
		const { city, tempLabel, month, daysOfWeek, degreesC } = this.state;
    const { weekForecast, temperature, forecast, precipitation, humidity, wind, windDirection } = this.props;
		return (
			<React.Fragment>
				<h1 className="title">Weather Lookup</h1>
				<form onSubmit={(e) => this.updateCoordinates(e)}>
    			<div className="form-group-search">
        		<label /*htmlFor="address"*/>Enter Location</label><br/>
						<small>Please copy + paste an address directly from Google Maps or other.</small><br/>
        		<input
            	type="text"
            	className="form-control"
           	 id="address"
           	 required
           	 //value={address} if converting to functional component
            	onChange={(e) => this.setState({address: e.target.value})}
            />
						<br/><button className="buttons" type='submit'>Search</button><br/>
	          <button type="button" className="buttons" onClick={this.switchDegreeHandler}>
	            Switch to {degreesC ? 'Fahrenheit' : 'Celsius'}
	          </button>
					</div>
				</form>
      	<div className="card">			
					<Today
						city={city}
						temperature={temperature}
						tempLabel={tempLabel}
						precipitation={precipitation}
						humidity={humidity}
						wind={wind}
						windDirection={windDirection}
					/>
          {weekForecast.map(day => (
						<div className="week-row" key={day.windDirection}>
              <WeekDays
								temperature={day.temperature}
								tempLabel={tempLabel}
								precipitation={day.precipitation}
								humidity={day.humidity}
								wind={day.wind}
								windDirection={day.windDirection}
								monthNow={day.monthNow}
								dayOfWeek={day.dayOfWeek}
              	>
		    				<Week
									monthNow={day.monthNow}
									dayOfWeek={day.dayOfWeek}
		    					/>
							</WeekDays>
						</div>
          ))}
      	</div>
			</React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
		temperature: state.temperature,
		forecast: state.forecast,
		precipitation: state.precipitation,
		humidity: state.humidity,
		wind: state.wind,
		windDirection: state.windDirection,
		weekForecast: state.weekForecast
  };
};

export default connect(mapStateToProps, {
  getWeather,
	getWeatherDefault,
	getWeatherFahrenheit
})(App);

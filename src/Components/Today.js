import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Components.css';
import partlyRainy from '../assets/images/partlyRainy.png';
import rainy from '../assets/images/rainy.png';
import sunny from '../assets/images/sunny.png';

export class Today extends Component {
	state = {
		now: new Date().toLocaleString()
	}
  //can make these their own component also and pass in props for the data type and CSS class:
	//some would argue for it, others against it
	
  render() {
		const { now } = this.state;
		const {city, precipitation, temperature, tempLabel, humidity, wind, windDirection } = this.props;
    return (
      <div
        data-test="today"
      >
				<div className="day-city">{city}</div><br/>
				<div className="day-date font-grey">{now}</div><br/>
				<div className="today-grid-container" data-test="today-titles">
					<div className="grid-1-image">
						{precipitation < .110000 ? (
							<img
        				src={sunny}
        				alt="sun_cartoon"
								className="today-image"
      					/>
							):''}
						{.110000 < precipitation && precipitation < .500000 ? (
							<img
       					src={partlyRainy}
       					alt="partly_rainy_cartoon"
								className="today-image"
      					/>
						):''}
						{precipitation > .500000 ? (
							<img
     	 					src={rainy}
       					alt="rainy_cartoon"
								className="today-image"
     						/>
						):''}
					</div>
					<div className="grid-2-temp">
						<div><span className="day-temperature">{temperature}</span> <span className="font-grey">{tempLabel}</span></div>
					</div>
					<div className="grid-4-details left-align font-grey">
						<div>Precipitation: {precipitation} kg within m2 per hour</div>
						<div>Humidity: {humidity}%</div>
						<div>Wind: {wind} Dir: {windDirection}</div>
        	</div>
				</div>
      </div>
    );
  }
}

Today.propTypes = {
  title: PropTypes.string
};

export default Today;

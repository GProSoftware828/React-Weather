import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Week} from './Week';
import './Components.css';
import partlyRainy from '../assets/images/partlyRainy.png';
import rainy from '../assets/images/rainy.png';
import sunny from '../assets/images/sunny.png';

export class WeekDays extends Component {
  //can make these their own component also and pass in props for the data type and CSS class:
	//some would argue for it, others against it
	
  render() {
		const { monthNow, dayOfWeek, precipitation, temperature, tempLabel, wind, windDirection } = this.props;
    return (
      <div
        data-test="weekday"
      >
				{this.props.children}
				<div data-test="titles">
					{precipitation < .110000 ? (
        		<img
          		src={sunny}
          		alt="sun_cartoon"
							className="week-image"
        			/>
					):''}
					{.110000 < precipitation && precipitation < .500000 ? (
						<img
          		src={partlyRainy}
          		alt="partly_rainy_cartoon"
							className="week-image"
        			/>
					):''}
					{precipitation > .500000 ? (
						<img
         	 		src={rainy}
          		alt="rainy_cartoon"
							className="week-image"
        			/>
					):''}
					<div>{temperature} {tempLabel}</div>
					<div className="font-grey">Wind: {wind}</div>
					<div className="font-grey">Dir:{windDirection}</div>
        </div>
      </div>
    );
  }
}

WeekDays.propTypes = {
  title: PropTypes.string
};

export default WeekDays;

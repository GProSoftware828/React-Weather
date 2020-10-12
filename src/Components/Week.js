import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Components.css';

export class Week extends Component {
	state = {
	}
	
  render() {
		const { monthNow, dayOfWeek } = this.props;
    return (
      <div
        data-test="week"
      >
				<div data-test="titles">
					<div>{monthNow}/{dayOfWeek}</div>
        </div>
      </div>
    );
  }
}

Week.propTypes = {
  title: PropTypes.string
};

export default Week;

import React, { Component } from 'react';
import Moment from 'moment'; 
class detail extends Component {
  render() {
    const { data } = this.props;
    const time = Moment(data.startTime).format('HH:mm');
    const weather = data.weather;
    const temperature = `${data.highestTemperature}°`;
    return (
      <div className='Details'>
          <div className="time">{time}</div>
          <div className="weatherType">{weather}</div>
          <div className="temperaature">{temperature}</div>
      </div>
    );
  }
}

export default detail;
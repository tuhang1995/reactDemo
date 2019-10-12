import React, { Component } from 'react';
import RealTime from './realTime/realTime'
import WeatherDetails from './weatherDetails/weatherDetails'
import Indexes from './Indexes/indexes'
class index extends Component {
  constructor(){
    super()
    this.state = {
      realTimeData: null,
      weatherDatailsData: null,
      indexesData: null
    }
  }
  componentDidMount() {
    // 如遇跨域问题 `create-react-app` 生成的项目可在 `package.json` 内新添
    // "proxy": "http://aider.meizu.com"
    fetch('/app/weather/listWeather?cityIds=101020100')
      .then(res => res.json())
      .then((res) => {
        if (res.code === '200' && res.value.length) {
          console.log(res.value[0])
          const { realtime, weatherDetailsInfo, indexes } = res.value[0];
          const { weather3HoursDetailsInfos } = weatherDetailsInfo
          this.setState({
            realTimeData: realtime,
            weatherDetailsData: weather3HoursDetailsInfos,
            indexesData: indexes,
          }) 
        }
      });
  }
  render() {
    const { realTimeData, weatherDetailsData, indexesData } = this.state
    return (
      <div className='weather-c'>
        <RealTime  data={realTimeData}  /> 
         
        <WeatherDetails  data={weatherDetailsData} />
        <Indexes  data={indexesData}/>
      </div>
    );
  }
}

export default index;
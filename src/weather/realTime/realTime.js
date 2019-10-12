import React, { Component } from 'react';
class realTime extends Component {
  constructor(props){
    super(props);
    this.state = { 
      weatherData:null
    }
  } 
  //接收从父组件异步传的参数
  componentWillReceiveProps(nextProps){
    setTimeout(()=>{
      this.setState({
        weatherData:nextProps.data
      })
    },0)
  }
  render() { 
    if(this.state.weatherData != null){
        let {
          temp, weather, wD: windType, wS: windLevel, sD: humidity,
        } = this.state.weatherData;
      return (
        <div className='realTime'>
          <h1>今日上海天气</h1>
          <h1 className='temp'>{`${temp}°`}</h1>
          <h2 className='weather'>{weather}</h2>
          <h3 className='wind'>{`${windType} ${windLevel}`}</h3>
          <div className="humidity">{`湿度 ${humidity}%`}</div>
        </div>
      );
    }else{
      return (
        <div className='realTime'>
          正在加载中
        </div>
      )
    }
  }
}
export default realTime;
import React, { Component } from 'react';
import Details from '../detail/detail'
import Indesex from '../Indexes/indexes'
class weatherDetails extends Component {
  constructor(props){
    super(props);
    this.state = { 
      detailWeatherData:null
    }
  } 
  //接收从父组件异步传的参数
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    setTimeout(()=>{
      this.setState({
        detailWeatherData:nextProps.data
      })
    },0)
  }
  render() {
   // const { data } = this.state.detailWeatherData;
    return (
      <div className='c-detailWeather'>
        <div className='c-detail'>
          {
             this.state.detailWeatherData && this.state.detailWeatherData.map(detail => <Details data={detail} key={detail.startTime}/>)
          }
        </div>
        <Indesex />
      </div>
    );
  }
}

export default weatherDetails;
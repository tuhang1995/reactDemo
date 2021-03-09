// import logo from './logo.svg';
import './App.css'
//import Buttons from './button'
//import DemoCss from './demo-css'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Button from 'antd/es/button'
import React, { Component } from 'react'
import Nav from './nav'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodName: '请点击子组件查看我的内容',
    }
  }
  changeFood = (item) => {
    console.log(item)
    this.setState({
      foodName: item,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="roter">
          <h3>我是路由</h3>
          <div className="c-router">
            <Nav></Nav>
          </div>
        </div>

        <div className="model">
          <h3>底部区域</h3>
          {/* <div className="m-content">
            <Buttons changeFood={this.changeFood} />{' '}
          </div>
          <div>
            <Button type="primary" disabled>
              {this.state.foodName}
            </Button>
          </div> */}
        </div>
      </div>
    )
  }
}

export default App

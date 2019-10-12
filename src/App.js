
// import logo from './logo.svg';
import './App.css';
import Buttons from './button'
import DemoCss from './demo-css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Button from 'antd/es/button';
import React, { Component } from 'react'
import Two from './two'
import Nav from './nav'
import Parent from './parent'
import Weather from './weather/index'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodName:'请点击子组件查看我的内容'
    }
  }
  changeFood = (item) => {
    console.log(item)
    this.setState({
      foodName:item
    })
  }
  render() {
    return (
      <div className="App">
      
      
        {/* 
        <DemoCss />
         */}
         <div className='roter'>
           <h3>我是路由</h3>
           <div className='c-router'>
            <BrowserRouter>
              <Switch> 
                <Route component={Nav} path='/' exact />
                {/* <Route component={Buttons}  path='/buttons' /> */}
                <Route component={DemoCss} path='/demoCss' />
                <Route component={Two} path='/two' />
                <Route component={Parent} path='/table' />
                <Route component={Weather} path='/weather' />
              </Switch>
            </BrowserRouter>
           </div>
         </div>
         <div className='model'>
          <h3>我是组件</h3>
          <div className='m-content'> <Buttons changeFood={this.changeFood} /> </div>
          <div> <Button type="primary" disabled>{this.state.foodName}</Button></div>
         </div>
          
      </div>
    );
  }
}

export default App;


// import logo from './logo.svg';
import './App.css';
import Buttons from './button'
import DemoCss from './demo-css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Two from './two'
import Nav from './nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Buttons  />
        <DemoCss />
        <Two  name='我是组件'/>  */}
        <BrowserRouter>
            <Switch> 
              <Route component={Nav} path='/' exact />
              <Route component={Buttons} path='/buttons' />
              <Route component={DemoCss} path='/demoCss' />
              <Route component={Two} path='/two' />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

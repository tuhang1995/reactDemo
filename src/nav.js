import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import Home from './two'
import Parent from './parent'
import DemoCss from './demo-css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Weather from './weather/index'
export default class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = [
      {
        name: '主页',
        path: 'Home',
      },
      {
        name: 'react的render的基本用法',
        path: 'demoCss',
      },
      {
        name: '表格',
        path: 'table',
      },
      {
        name: '天气组件',
        path: 'weather',
      },
    ]
    const elements = []
    data.forEach((item, index) => {
      elements.push(
        // 渲染头部
        <div className="flex nav" key={index}>
          <div className="flex-item nav-item">
            <Link activeclassname="nav-active" to={item.path}>
              {item.name}
            </Link>
          </div>
        </div>
      )
    })
    return (
      <Router>
        <div className="tabs">{elements}</div>
        <div className="content">
          <Route component={Home} path="/Home" />
          <Route component={DemoCss} path="/demoCss" />

          <Route component={Parent} path="/table" />
          <Route component={Weather} path="/weather" />
        </div>
      </Router>
    )
  }
}

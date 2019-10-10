import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
          <div className='flex nav'>
            <div className='flex-item nav-item'>
                <Link to='/two'>
                主页
                </Link>
            </div>
            <div className='flex-item'>
                <Link to='/demoCss'>
                react的render的基本用法
                </Link>
            </div>
            <div className='flex-item'>
                <Link to='/table'>
                表格
                </Link>
            </div>
          </div>
        )
    }
}
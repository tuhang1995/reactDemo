import React, { Component } from 'react'
import './button.css'
import Button from 'antd/es/button';
import { Icon } from 'antd';
class button extends Component {
  constructor(props) {
    super(props);
    this.test = 123
    this.arr = ['西瓜', "草莓", "菠萝"]
  }
  delFolder = (name) => {
    return (e) => {
      console.log(name);
    }
  }
  render () {
    const elements = [];
    this.arr.forEach((item, index) => {

      elements.push(
        <div onClick={this.delFolder(item)} className='button' key={index} >
          <Button type="primary">{item}</Button>
          <Icon type="star" theme="twoTone" />
          <div>我是第{index + 1}个div</div>
          <hr />
        </div>
      )
    });
    return (
      <div>
        {elements}
      </div>
    )
  }
}
export default button
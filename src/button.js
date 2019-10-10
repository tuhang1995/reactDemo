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
  delFolder = (item) => { 
    //子组件向父组件传递参数
      this.props.changeFood(item) 
  }
  // delFolder(){
  //   let name = 'Hang'
  //   this.props.changeFood(name)
  // }
  render () {
    const elements = [];
    this.arr.forEach((item, index) => {

      elements.push(
        <div onClick={()=>{this.delFolder(item)}} className='button' key={index} >
          
          <Icon type="apple" />
          <Button type="primary">{item}</Button>
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
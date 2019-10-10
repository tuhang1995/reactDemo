import React, { Component } from 'react'
import { Icon } from 'antd';
class Two extends Component {
  constructor(props) {
    super(props);
    this.newArr = [
      { name: "张三", sex: "男" },
      { name: "李四", sex: "男" },
      { name: "王五", sex: "女" },
    ]
  }
  getData (name) {
    return (e) => {
      console.log(name);
    }
  }
  render () {
    const elements = [];
    this.newArr.forEach((item, index) => {

      elements.push(
        <div onClick={this.getData(item)} className='' key={index} >

          <Icon type="star" theme="twoTone" />
          <div>姓名:{item.name}</div>
          <div>性别:{item.sex}</div>
          <div>{this.props.name}</div>
          <hr />
        </div>
      )
    });
    return (
      <div className='two'>
        {elements}
      </div>
    )
  }
}
export default Two
import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';

class demoCss extends Component {
  constructor(props){
    super(props);
    this.dClassName = {
      className:'change',
      id:'test',
      'data-root':'123'
    }
    this.state = {
      name:'菠萝'
    }
  }
  editState = () => {
    return (e) => { 
      //修改state里的值
      let name = this.state.name === '菠萝' ? '葡萄':'菠萝'
      this.setState({
        name:name
      })
    }
  }
  render () {
    const a = '我是文字'
    const model = 'view2'
    return (
      
      <div className="render">
        <div {...this.dClassName}>{a}hello</div>
        <Button type="danger" onClick={this.editState()}>{this.state.name}</Button>
        <div>{model ==='view1' ? '我是if/else里的if':'我是else'}</div>
      </div>
    );
  }
}

export default demoCss;
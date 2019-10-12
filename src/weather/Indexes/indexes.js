import React, { Component } from 'react';

class indexes extends Component {
  render() {
    const { data } = this.props;
    const Index = ({ data }) => (
      <div className="Index">
        <div className="level">{data.level}</div>
        <div className="name">{data.name}</div>
      </div>
    );
    return (
      <div className="Indexes">
        {
          data && data.map(index => <Index data={index} key={index.abbreviation}/>)
        }
      </div>
    );
  }
}

export default indexes;
import React from 'react';
import './App.css';

class Gif extends React.Component {
  render() {
    return (
    <li className="gif-wrap">
      <img src={ this.props.url } alt=""/>
    </li>
    );
  }; 
}

export default Gif;

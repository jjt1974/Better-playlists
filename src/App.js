import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#fff'
}

class Aggregate extends Component {
  render () {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2 style={defaultStyle}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render () {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text" />
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render () {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let name = 'Jeff'
    let green = 'green'
    let headerStyle = {color: green, 'font-size': '50px'}   
    return (
      
      <div classname="app">
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
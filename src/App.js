import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from './Components/Tabbar/Tabbar'
// import {connect} from 'react-redux'

class App extends Component{
  render(){
    return <div>
      {<Tabbar />}
      {this.props.children}
    </div>
  }
}


export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './components/Header';
import Foot from './components/Footer';
import Tab from './components/Table';
import Form from './components/Form';

class Welcome extends Component{
  render(){
    return(
    <div>
      <Head/>
      <Tab/>
      <Form/>
      <Foot/>
    </div>
    );
  }
}

ReactDOM.render(<Welcome/>,document.getElementById("root"));

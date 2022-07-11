import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>I'm Batman</h1>
        <h2>no doubt about it</h2>
        <div>
          {moment().format('LLLL')}
        </div>
      </div>
    );
  }
}

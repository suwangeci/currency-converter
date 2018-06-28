import React, { Component } from 'react';
import './App.css';
import {Segment} from 'semantic-ui-react';
import Uppersection from './Uppersection';

class App extends Component {
  render() {
    return (
     <Segment className="ui purple" inverted >
  <Uppersection/>
     </Segment>
    );
  }
}

export default App;

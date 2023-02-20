import React, { Component } from 'react';
import logo from './logo.svg';
import ReactTooltip from 'react-tooltip';
import Reactable from 'reactable';
import './App.css';

var Table = Reactable.Table;
var Thead = Reactable.Thead;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

              OK there, we go.
        </p>

		<a data-tip data-for='global'> σ`∀´)σ </a>
		<a data-tip data-for='global'> (〃∀〃) </a>
		<ReactTooltip offset={{bottom:15}} class='extraClass' delayHide={500} place='bottom' type='light' effect='solid' id='global' aria-haspopup='true' role='tooltip'>
		<Table id="table" className="table" data={[
			{ Name: 'Cancer Type', Age: 'Glioma' },
			{ Age: 25,  Name: 'vamshi krishna' },
			{ Name: 'Everthing under my comtrol', Age: 30 },
		]}>
		<Thead></Thead>
		</Table>
		</ReactTooltip>
      </div>
    );
  }
}

export default App;

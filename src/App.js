import React, { Component } from 'react';
import './App.css';
import CalculatorComponent from '../src/components/calculator-component';

class App extends Component {
  render() {
    return (
      <div className="app-container">
          <CalculatorComponent/>
          <style>{css}</style>
      </div>
    );
  }
}

export default App;

const css = `
    .app-container{
        width: 420px;
        height: 550px;
        padding: 5px 10px;
        background-color: rgba(0, 29, 128, 0.22);
    }
`;

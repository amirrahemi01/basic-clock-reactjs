import React from 'react';
import './App.css';
import Timer from './components/Timer';
import SplitTimer from './components/SplitTimer';

function App() {
  return (
    <div className="app-container">
      <div className="stopwatch-box">
        <Timer />
        <SplitTimer />
      </div>
    </div>
  );
}

export default App;

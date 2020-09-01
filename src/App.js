import React from 'react';
import './App.css';

import Bio from './comps/Bio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Bio name="Subhasish" age="26" />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { Router } from '@reach/router';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import './App.css';
import { NavBar } from './components/Navigation/index';

setDefaultBreakpoints([{ mobile: 250 }, { tablet: 769 }, { desktop: 1025 }]);

function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <div className="App">
          <NavBar />

          <h1>Ian's Portfolio</h1>
        </div>
      </BreakpointProvider>
    </div>
  );
}

export default App;

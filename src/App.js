import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

export const DarkModeContext = React.createContext();
export const NavActiveContext = React.createContext();
export const NavUrlContext = React.createContext();

function App() {
  const DarkModeState = useState(true);
  const NavActiveState = useState(false);
  const NavUrlState = useState('');

  return (
    <DarkModeContext.Provider value={DarkModeState}>
      <NavActiveContext.Provider value={NavActiveState}>
        <NavUrlContext.Provider value={NavUrlState}>
          <div className="App">
            <Header />
            <Page />
          </div>
        </NavUrlContext.Provider>
      </NavActiveContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;

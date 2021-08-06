import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

export const DarkModeContext = React.createContext();
export const NavActiveContext = React.createContext();

function App() {
  const DarkModeState = useState(true);
  const NavActiveState = useState(false);

  return (
    <DarkModeContext.Provider value={DarkModeState}>
      <NavActiveContext.Provider value={NavActiveState}>
        <div className="App">
          <Header />
          <Page />
        </div>
      </NavActiveContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;

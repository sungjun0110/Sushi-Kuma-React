import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

export const DarkModeContext = React.createContext();

function App() {
  const DarkModeState = useState(true);

  return (
    <DarkModeContext.Provider value={DarkModeState}>
      <div className="App">
        <Header />
        <Page />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

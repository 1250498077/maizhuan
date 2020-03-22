import React from 'react';
import './App.css';
import './clear.css';
import Layout from './page/layout'
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
    <div className="App">
      <div>
          <Layout />
      </div>
    </div>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import './clear.css';
import Layout from './page/layout'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

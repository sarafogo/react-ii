import React from 'react';
import Home from  '../src/paginas/Home/Home'
import data from './data.json'

import './App.css';
import Login from './paginas/Login/Login';

function App() {
  return (
    <div className="App">
      <Home data={data} />
      <Login />
    </div>
  );
}

export default App;

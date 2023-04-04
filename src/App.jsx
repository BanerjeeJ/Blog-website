import React from 'react';
import './App.css';

import Home from './pages/Home';
import { Routes,Route,Switch } from 'react-router-dom';

const App = () => (
  <div className="container">
      <Routes>
      <Route path="/" element={<Home/>}/>

      </Routes>
    </div>
  );


export default App


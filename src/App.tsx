import React,{ Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Grid from './components/grid/grid';
import Internal from './components/grid/gridItems/internal/Internal';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";  

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/internal" element={<Internal />} />
        </Routes>
     </BrowserRouter>,
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './modules/mainPage/MainPage';
function App() {
  return (
    <div className="wrapper-content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;

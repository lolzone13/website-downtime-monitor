import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter >
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<App />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

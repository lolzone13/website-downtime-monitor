import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './LoginPage';
import NotFound from './Components/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter >
      <Routes>
        <Route exact path='/' element={<Navigate to='/login' />}/>
          

        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<App />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

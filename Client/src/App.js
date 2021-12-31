import React from 'react';
import './index.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteList from './Components/WebsiteList';
import AddWebsite from './Components/AddWebsite';
import { GlobalProvider } from './Context/GlobalState';
import { Link } from 'react-router-dom';
// src https://status.uptimerobot.com/
function App() {
  window.setTimeout(function () {
    window.location.reload();
  }, 900000);
  return (
    <div>
      <GlobalProvider>
        <Header />
        <Link to="/login">Login</Link><br />
        <StatusBar />
        <br />
        <WebsiteList />
        <AddWebsite />
      </GlobalProvider>
    </div>
  );
}

export default App;

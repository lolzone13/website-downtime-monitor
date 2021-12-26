import React from 'react';
import './index.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteList from './Components/WebsiteList';
import AddWebsite from './Components/AddWebsite';
import { GlobalProvider } from './Context/GlobalState';
// src https://status.uptimerobot.com/
function App() {
  window.setTimeout(function () {
    window.location.reload();
  }, 900000);
  return (
    <div>
      <GlobalProvider>
        <Header />
        <StatusBar />
        <br />
        <WebsiteList />
        <AddWebsite />
      </GlobalProvider>
    </div>
  );
}

export default App;

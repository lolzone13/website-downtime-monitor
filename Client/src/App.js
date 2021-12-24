import React from 'react';
import './App.css';
import './index.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteList from './Components/WebsiteList';
import AddWebsite from './Components/AddWebsite';
import { GlobalProvider } from './Context/GlobalState';
// src https://status.uptimerobot.com/
function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <StatusBar />
        <div style={{ fontSize: "20px" }}>Overall Uptime</div>
        <br />
        <WebsiteList />
        <AddWebsite />
      </GlobalProvider>
    </div>
  );
}

export default App;

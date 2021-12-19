import React from 'react';
import './App.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteList from './Components/WebsiteList';
import AddWebsite from './Components/AddWebsite';
// src https://status.uptimerobot.com/
function App() {
  return (
    <div>
      <Header />
      <StatusBar />
      <div style={{fontSize: "20px"}}>Overall Uptime</div>
      <br/>
      <WebsiteList />
      <AddWebsite />

    </div>
  );
}

export default App;

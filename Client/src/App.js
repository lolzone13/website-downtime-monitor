import React from 'react';
import './App.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteCard from './Components/WebsiteCard';
// src https://status.uptimerobot.com/
function App() {
  return (
    <div>
      <Header />
      <StatusBar />
      <div style={{fontSize: "20px"}}>Overall Uptime</div>
      <br/>
      <WebsiteCard />

    </div>
  );
}

export default App;

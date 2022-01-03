import React, { useContext } from 'react';
import './index.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteList from './Components/WebsiteList';
import AddWebsite from './Components/AddWebsite';
import WebsiteComponents from './Components/WebsiteComponents';
import { GlobalProvider } from './Context/GlobalState';
import { LoginProvider, LoginContext } from './Context/LoginContext';
import axios from 'axios'
// src https://status.uptimerobot.com/
function App() {

	
	
	window.setTimeout(function () {
		window.location.reload();
	}, 900000);

	const authStatus = useContext(LoginContext);

	return (
		<div>
			<LoginProvider>
				<GlobalProvider>
					
					<WebsiteComponents />

				</GlobalProvider>
			</LoginProvider>
		</div>
	);
}

export default App;

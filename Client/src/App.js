import React, { useContext } from 'react';
import './index.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteList from './Components/WebsiteList';
import AddWebsite from './Components/AddWebsite';
import { GlobalProvider } from './Context/GlobalState';
import { LoginContext, LoginProvider } from './Context/LoginContext';

// src https://status.uptimerobot.com/
function App() {



	window.setTimeout(function () {
		window.location.reload();
	}, 900000);



	return (
		<div>
			<LoginProvider>
				<GlobalProvider>

					<Header />
					<a href='http://localhost:5000/auth/logout'>Logout</a>
					<StatusBar />
					<br />
					<WebsiteList />
					<AddWebsite />

				</GlobalProvider>
			</LoginProvider>
		</div>
	);
}

export default App;

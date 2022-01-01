import React, { useContext } from 'react';
import './index.css';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import WebsiteList from './Components/WebsiteList';
import AddWebsite from './Components/AddWebsite';
import { GlobalProvider } from './Context/GlobalState';
import { loginContext } from './Context/LoginContext';
import LoginContext from './Context/LoginContext';
import { Link } from 'react-router-dom';
// src https://status.uptimerobot.com/
function App() {

	const userObject = useContext(loginContext);
	console.log(userObject);
	window.setTimeout(function () {
		window.location.reload();
	}, 900000);



	return (
		<div>
			<GlobalProvider>
				<Header />
				<Link to="/login">Logout</Link>
				<a href='http://localhost:5000/auth/logout'>Logout</a>
				<StatusBar />
				<br />
				<WebsiteList />
				<AddWebsite />
			</GlobalProvider>
		</div>
	);
}

export default App;

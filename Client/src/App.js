import React, { useContext } from 'react';
import './index.css';
import WebsiteComponents from './Components/WebsiteComponents';
import { GlobalProvider } from './Context/GlobalState';
import { LoginProvider } from './Context/LoginContext';


function App() {

	
	
	window.setTimeout(function () {
		window.location.reload();
	}, 900000);


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

import React, { useContext } from 'react'
import Header from './Header';
import StatusBar from './StatusBar';
import WebsiteList from './WebsiteList';
import AddWebsite from './AddWebsite';

import { LoginContext } from '../Context/LoginContext';

function WebsiteComponents() {
    const userData = useContext(LoginContext);



    if (userData === 'Unauthenticated') {
        return (<div> Unauthorized </div>)
    }
    else return (
        <div>
            <Header />
            <a href='http://localhost:5000/auth/logout'>Logout</a>
            <StatusBar />
            <br />
            <WebsiteList />
            <AddWebsite />
        </div>
    )
}

export default WebsiteComponents

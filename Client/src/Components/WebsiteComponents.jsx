import React, { useContext } from 'react'
import Header from './Header';
import StatusBar from './StatusBar';
import WebsiteList from './WebsiteList';
import AddWebsite from './AddWebsite';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';

function WebsiteComponents() {
    const userData = useContext(LoginContext);
    let navigate = useNavigate();


    if (userData === 'Unauthenticated') {
        setTimeout(() => navigate('/login'), 3000);

        
        return (
            <>
        <div> Unauthorized </div>
        <div>Redirecting...</div>
        </>
        )
    }
    else return (
        <div>
            <Header />
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href='http://localhost:5000/auth/logout'>Logout</a>
            <StatusBar />
            <br />
            <WebsiteList />
            <AddWebsite />
        </div>
    )
}

export default WebsiteComponents

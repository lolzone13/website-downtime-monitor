import React, { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext'
function Header() {
    const userData = useContext(LoginContext);
    

    return (
        <div className='m-10 text-center'>
            <h1 className='text-5xl font-bold'>Website Downtime Monitor</h1>
            <h2 className='pt-3 text-right text-2xl font-bold'>Hello {userData.username}</h2>
        </div>
    )
}

export default Header;

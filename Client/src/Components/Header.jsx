import React from 'react';

function Header() {
    const userPage = () => {
        window.open('http://localhost:5000/auth/getUser', '_self');
    }

    return (
        <div className='m-10 text-center'>
            <h1 className='text-5xl font-bold'>Website Downtime Monitor</h1>
            <button onClick={userPage}> Grace button </button>
        </div>
    )
}

export default Header;

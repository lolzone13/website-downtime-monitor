import React from 'react';

function WebsiteStatus({ website }) {
    
    return (
        <li>
            <a href={website.url}>{website.name}</a>: <span className={website.status=="Up" ? "web-status-green" : "web-status-red" }>{website.status}</span>
             <button className="delete-button">X</button>
        </li>
    )
}

export default WebsiteStatus;

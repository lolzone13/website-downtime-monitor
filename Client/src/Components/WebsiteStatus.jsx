import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

function WebsiteStatus({ website }) {
    
    const { deleteWebsite } = useContext(GlobalContext);

    return (
        <li>
            <a href={website.url}>{website.name}</a>: <span className={website.status==="Up" ? "web-status-green" : "web-status-red" }>{website.status}</span>
             <button onClick={() => deleteWebsite(website.id)} className="delete-button">X</button>
        </li>
    )
}

export default WebsiteStatus;

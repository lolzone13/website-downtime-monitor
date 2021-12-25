import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

function WebsiteStatus({ website }) {
    
    const { deleteWebsite } = useContext(GlobalContext);

    return (
        <li>
            <a href={website.url}>{website.name}</a>: <span className={website.status==="Up" ? "text-lime-600" : "text-amber-700" }>{website.status}</span>
             <button onClick={() => deleteWebsite(website._id)} className="delete-button">X</button>
        </li>
    )
}

export default WebsiteStatus;

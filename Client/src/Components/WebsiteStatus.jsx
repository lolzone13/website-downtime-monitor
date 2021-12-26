import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

function WebsiteStatus({ website }) {
    
    const { deleteWebsite } = useContext(GlobalContext);

    return (
        <li className='block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600'>
            <a href={website.url}>{website.name}</a>: <span className={website.status==="Up" ? "text-lime-600" : "text-amber-700" }>{website.status}</span>
            <div className="left-10">
             <button onClick={() => deleteWebsite(website._id)} className='h-5 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800'>del</button>
             </div>
        </li>
    )
}

export default WebsiteStatus;

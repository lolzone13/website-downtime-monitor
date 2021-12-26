import React, { useContext, useEffect } from 'react'
import WebsiteStatus from './WebsiteStatus'
import { GlobalContext } from '../Context/GlobalState';


function WebsiteList() {


    const { websites, getWebsites } = useContext(GlobalContext);
    

    useEffect(() => {
        getWebsites();
        // eslint-disable-next-line
    } ,[]);

    return (
        <div>
            <ul className='w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                {websites.map(website => (<WebsiteStatus key={website._id} website={website} />))}
            </ul>
        </div>
    )
}

export default WebsiteList;

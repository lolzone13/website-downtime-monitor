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
            <ul>
                {websites.map(website => (<WebsiteStatus key={website._id} website={website} />))}
            </ul>
        </div>
    )
}

export default WebsiteList;

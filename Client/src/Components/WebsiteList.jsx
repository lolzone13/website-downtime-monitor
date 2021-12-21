import React, { useContext, useEffect } from 'react'
import WebsiteStatus from './WebsiteStatus'
import { GlobalContext } from '../Context/GlobalState';


function WebsiteCards() {


    const { websites, getWebsites } = useContext(GlobalContext);
    

    useEffect(() => {
        getWebsites();
    } ,[]);

    return (
        <div>
            <ul>
                {websites.map(website => (<WebsiteStatus key={website.id} website={website} />))}
            </ul>
        </div>
    )
}

export default WebsiteCards;

import React, { useContext } from 'react'
import WebsiteStatus from './WebsiteStatus'
import { GlobalContext } from '../Context/GlobalState';


function WebsiteCards() {

    // get from global context and place the cards
    const { websites } = useContext(GlobalContext);
    console.log(websites);

    return (
        <ul>

            {websites.map(website => (<WebsiteStatus key={website.id} website={website}/>))}

        </ul>
    )
}

export default WebsiteCards;

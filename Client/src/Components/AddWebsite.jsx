import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

function AddWebsite() {

    const [ websiteName, setWebsiteName ] = useState("");
    const [url, setURL ] = useState('');
    const { addWebsite }  = useContext(GlobalContext);

    function onSubmit(event) {
        event.preventDefault();

        const newWebsite = {
            id: Math.floor(Math.random() * 100000000),// use uiud 
            name: websiteName,
            url: url,
            status: 'Up'
        }

        addWebsite(newWebsite);
    }


    return (
        <div>
            <h3>Add new website to monitor</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={websiteName} onChange={(eve) => setWebsiteName(eve.target.value)} placeholder="Enter Website Name..." />
                </div>
                <div>
                    <label htmlFor="url" >
                        Enter the URL for your website or API
                    </label >
                    <input type="url" value={url} onChange={(eve) => setURL(eve.target.value)} placeholder="Enter url..." />
                </div>
                <button> Add Website </button>
            </form>
        </div>
    )
}

export default AddWebsite;

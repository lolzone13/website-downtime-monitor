import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

function AddWebsite() {

    const [websiteName, setWebsiteName] = useState("");
    const [url, setURL] = useState('');
    const { addWebsite } = useContext(GlobalContext);

    function onSubmit(event) {
        event.preventDefault();

        const newWebsite = {
            id: Math.floor(Math.random() * 100000000),// use uiud 
            name: websiteName,
            url: url,
            status: 'Up'
        }

        addWebsite(newWebsite);
        window.location.reload();
        setWebsiteName('');
        setURL('');

    }


    return (
        <div>
            <h3 className='m-5 text-3xl font-bold'>Add a new website to monitor</h3>
            <form onSubmit={onSubmit}>
                <div className='text-justify m-2'>
                    <label className='text-2xl' htmlFor="text">Website Name</label>
                    <input className='left-40 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-fit' type="text" value={websiteName} onChange={(eve) => setWebsiteName(eve.target.value)} placeholder="Enter Website Name" />
                </div>
                <div className='text-justify m-2'>
                    <label className='text-2xl' htmlFor="url" >
                        Enter the URL for your website or API
                    </label >
                    <input className='left-20 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-fit' type="url" value={url} onChange={(eve) => setURL(eve.target.value)} placeholder="Enter url" />
                </div>
                <div className='inset-auto'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'> Add Website </button>
                </div>
            </form>
        </div>
    )
}

export default AddWebsite;

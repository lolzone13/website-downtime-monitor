import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

function StatusBar() {

    const { websites } = useContext(GlobalContext);

    const working = "All systems operational";
    const notWorking = "Some websites may be down";
    let status = working;

    for(let i=0; i<websites.length; i++) {
        if (websites[i].status !== 'Up') {
            status = notWorking;
            break;
        }
    }
    

    return (
        <div className='text-center'>
            <h2 className={(status===working) ? 'text-3xl text-green-600' : 'text-3xl-red-600'}> { status } </h2>
        </div>
    )
}

export default StatusBar;

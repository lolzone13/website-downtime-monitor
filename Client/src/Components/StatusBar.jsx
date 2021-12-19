import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

function StatusBar() {

    const { websites } = useContext(GlobalContext);

    const working = "All Systems operational  🐱‍🏍";
    const notWorking = "Some websites may be down (╯°□°）╯︵ ┻━┻";
    let status = working;

    for(let i=0; i<websites.length; i++) {
        if (websites[i].status !== 'Up') {
            status = notWorking;
            break;
        }
    }
    

    return (
        <div>
            <h2 className='status-bar'> { status } </h2>
        </div>
    )
}

export default StatusBar;

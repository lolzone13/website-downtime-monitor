import React, { createContext, useEffect } from "react";
import axios from 'axios'

export const loginContext = createContext({});

export default function LoginContext({ children }) {

    const [userObject, setUserObject] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/auth/getUser', { withCredentials: true })
        .then((res) => {
            if (res.data) {
                console.log(res);
                setUserObject(res.data);
            }
            else console.log('ERROR fetching data from backend');
        })

    }, [])
    return (
        <loginContext.Provider value={userObject}>
            { children }
        </loginContext.Provider>
    )
}
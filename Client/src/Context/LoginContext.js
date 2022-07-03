import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {

    const [userObject, setUserObject] = useState({});

    useEffect(() => {
        axios.get('https://blooming-wildwood-82432.herokuapp.com/' + '/auth/getUser', { withCredentials: true })
        .then((res) => {
            if (res.data) {
                //console.log(res.data);
                setUserObject(res.data);
            }
            else {
                console.log('ERROR fetching data from backend');

            }
        })

    }, []);
    
    return (
        <LoginContext.Provider value={userObject}>
            { children }
        </LoginContext.Provider>
    )
}
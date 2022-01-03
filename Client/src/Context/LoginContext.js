import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {

    const [userObject, setUserObject] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/auth/getUser', { withCredentials: true })
        .then((res) => {
            if (res.data) {
                console.log(res.data);
                setUserObject(res.data);
            }
            else console.log('ERROR fetching data from backend');
        })

    }, []);
    console.log(userObject);
    return (
        <LoginContext.Provider value={userObject}>
            { children }
        </LoginContext.Provider>
    )
}
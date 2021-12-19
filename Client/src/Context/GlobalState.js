import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer.js'
import axios from 'axios';

const initialState = {
    websites: [
        {id: 1, name: 'Spotify', url: 'https://www.spotify.com/', status: 'Up'},
        {id: 2, name: 'Google', url: 'https://www.google.co.in/', status: 'Up'},
        {id: 3, name: 'Youtube', url: 'https://www.youtube.com/', status: 'Up'}
    ],
    error: null,
    loading: true

}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function addWebsite(website) {
        dispatch({
            type: 'ADD_WEBSITE',
            payload: website
        })
    }

    function deleteWebsite(id) {
        dispatch({
            type: 'DELETE_WEBSITE',
            payload: id
        })

    }

    return (<GlobalContext.Provider value={{
        websites: state.websites,
        addWebsite,
        deleteWebsite
    }}>
        {children}
    </GlobalContext.Provider>
    );
}
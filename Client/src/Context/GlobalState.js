import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer.js'
import axios from 'axios';

const initialState = {
    websites: [],
    error: null,
    loading: true

}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    async function getWebsites() {
        try {
            console.log("Hello");
            const response = await axios.get('/api/websites');
            

            dispatch({
                type: 'GET_WEBSITES',
                payload: response.data.data
            })            

        } catch (error) {
            dispatch({
                type: 'WEBSITES_ERROR',
                payload: error.response.data.error

            })            
        }
    }


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
        error: state.error,
        loading: state.loading,
        getWebsites,
        addWebsite,
        deleteWebsite
    }}>
        {children}
    </GlobalContext.Provider>
    );
}
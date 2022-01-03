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


    async function addWebsite(website) {
        
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            
            const response = await axios.put('/api/websites', website, config);
            dispatch({
                type: 'ADD_WEBSITE',
                payload: response.data.data
            })

        } catch (err) {
            dispatch({
                type: 'WEBSITES_ERROR',
                payload: err.response.data.error
            })
        }

    }

    async function deleteWebsite(id) {
        try {
            await axios.put(`/api/websites/${id}`);
            dispatch({
                type: 'DELETE_WEBSITE',
                payload: id
            });

        } catch (error) {
            dispatch({
                type: 'WEBSITES_ERROR',
                payload: error.response.data.error

            })
        }
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
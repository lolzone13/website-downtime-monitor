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
    async function getWebsites() {
        try {
            const res = await axios.get('/api/v1/Websites');
            dispatch({
                type: 'GET_WEBSITES',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'WEBSITE_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteWebsite(id) {
        try {
            await axios.delete(`/api/v1/Websites/${id}`);
            dispatch({
                type: 'DELETE_WEBSITE',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'Websites_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addTransaction(transaction) {
        const config = {
            headers : {
                'Content-type': 'application/json'
            }
        }

        try {
            const response = await axios.post('/api/v1/Websites',transaction, config);
            
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: response.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: err.response.data.error
            })
        }

    }

    return (<GlobalContext.Provider value={{
        websites: state.websites
    }}>
        {children}
    </GlobalContext.Provider>
    );
}
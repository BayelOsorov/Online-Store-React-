import axios from 'axios';
import React, { useReducer } from 'react';
import { BROWSING_API } from '../helpers/const';
export const browsingContext = React.createContext()
const INIT_STATE = {}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}
const BrowsingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const addBrowsing = async (browsing) => {
        try {
            await axios.post(`${BROWSING_API}`, browsing)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <browsingContext.Provider value={{
            addBrowsing
        }}>
            {children}
        </browsingContext.Provider>
    );
};

export default BrowsingContextProvider;
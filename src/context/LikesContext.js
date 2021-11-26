import axios from 'axios';
import React, { Children, useReducer } from 'react';
import { LIKES_API } from '../helpers/const';
export const likesContext = React.createContext()
const INIT_STATE = {}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}
const LikesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const addLike = async (newLike) => {
        try {
            await axios.post(`${LIKES_API}`, newLike)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <likesContext.Provider value={{
            addLike,
        }} >
            {children}
        </likesContext.Provider>
    );
};

export default LikesContextProvider;
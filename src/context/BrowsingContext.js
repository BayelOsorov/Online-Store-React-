import axios from 'axios';
import React, { useReducer } from 'react';
import { API, BROWSING_API } from '../helpers/const';
export const browsingContext = React.createContext()
const INIT_STATE = {
    views: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_VIEWS":
            return { ...state, views: action.payload }
        default: return state
    }
}
const BrowsingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getViews = async (user) => {
        try {
            const { data } = await axios(`${BROWSING_API}/?user=${user}`)
            dispatch({
                type: "GET_VIEWS",
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const addBrowsing = async (id, user) => {
        try {
            const { data } = await axios(`${BROWSING_API}/?user=${user}`)
            let res = data.filter((item) => {
                return item.products.id == id
            })
            const response = await axios(API)
            let products = {}
            response.data.forEach(item => {
                if (item.id == id) {
                    products = item
                }
            })

            if (res.length === 0) {
                let obj = {
                    user,
                    products,
                }
                await axios.post(`${BROWSING_API}`, obj)
            } else {
                console.log(false)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <browsingContext.Provider value={{
            getViews,
            addBrowsing,
            views: state.views
        }}>
            {children}
        </browsingContext.Provider>
    );
};

export default BrowsingContextProvider;
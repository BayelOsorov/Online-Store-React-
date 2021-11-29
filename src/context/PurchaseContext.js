import axios from 'axios';
import React, { Children, useReducer } from 'react';
import { PURCHASE_API } from '../helpers/const';

export const purchaseContext = React.createContext()
const INIT_STATE = {
    purchases: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PURCHASES":
            return { ...state, purchases: action.payload }
        default: return state
    }
}
const PurchaseContextProvider = ({ children }) => {
    const getPurchase = async (user) => {
        try {
            const { data } = await axios(`${PURCHASE_API}/?user=${user}`)
            dispatch({
                type: "GET_PURCHASES",
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const addPurchase = async (purchase) => {
        try {
            await axios.post(`${PURCHASE_API}`, purchase)
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <purchaseContext.Provider value={{
            addPurchase,
            getPurchase,
            purchases: state.purchases
        }}>
            {children}
        </purchaseContext.Provider>
    );
};

export default PurchaseContextProvider;
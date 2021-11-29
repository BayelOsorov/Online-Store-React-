import axios from 'axios';
import React, { useReducer } from 'react';
import { RATING_API } from '../helpers/const';
export const ratingContext = React.createContext()
const INIT_STATE = {
    ratings: null,
    rate: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_RATINGS":
            return { ...state, ratings: action.payload }
        case 'GET_RATE_BY_ID':
            return { ...state, rate: action.payload }
        default: return state
    }
}
const RatingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getRates = async (productId) => {
        const { data } = await axios(`${RATING_API}/?productId=${productId}`)

        dispatch({
            type: "GET_RATINGS",
            payload: data
        })
    }
    const addRate = async (rate) => {
        try {
            await axios.post(RATING_API, rate)
            getRates(rate.productId)

        } catch (e) {
            console.log(e)
        }
    }

    const getRateById = async (id) => {
        try {
            const { data } = await axios(`${RATING_API}/${id}`)
            dispatch({
                type: 'GET_RATE_BY_ID',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const changeRate = async (user, rate, productId, id) => {
        try {
            let newProd = {
                owner: user,
                rate,
                productId,
            }
            await axios.patch(`${RATING_API}/${id}`, newProd)
            getRates(newProd.productId)
        }
        catch (e) {
            console.log(e);
        }
    }
    // const getRateByUser = async (user) => {
    //     try {
    //         const {data} = await axios(`${RATING_API}/?owner=${user}`)
    //         dispatch({
    //             type: 'GET_RATE_BY_USER',
    //             payload: data
    //         })
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }
    return (
        <ratingContext.Provider value={{
            addRate,
            getRates,
            changeRate,
            getRateById,
            ratings: state.ratings,
            rate: state.rate
        }}>
            {children}
        </ratingContext.Provider>
    );
};

export default RatingContextProvider;
import axios from 'axios';
import React, { Children, useReducer } from 'react';
import { LIKES_API } from '../helpers/const';
export const likesContext = React.createContext()
const INIT_STATE = {
    likes: null,
    userLikes: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_LIKES':
            return { ...state, likes: action.payload }
        case "GET_USER_LIKES":
            return { ...state, userLikes: action.payload }
        default: return state
    }
}
const LikesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getLikes = async (productId) => {
        try {
            const { data } = await axios(`${LIKES_API}/?productId=${productId}`)
            dispatch({
                type: 'GET_LIKES',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const addLike = async (newLike) => {
        try {
            await axios.post(`${LIKES_API}`, newLike)
            getLikes(newLike.productId)
        }
        catch (e) {
            console.log(e);
        }
    }
    const changeLike = async (productId, owner, likeCount, id) => {
        let newL = {
            productId,
            owner,
            likeCount,
            id
        }
        await axios.patch(`${LIKES_API}/${id}`, newL)
        getLikes(productId)
    }
    const getLikesByUser = async (user, phoneId) => {
        try {
            const { data } = await axios(`${LIKES_API}/?owner=${user}`)
            dispatch({
                type: "GET_USER_LIKES",
                payload: data
            })
            getLikes(phoneId)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <likesContext.Provider value={{
            addLike,
            getLikes,
            changeLike,
            getLikesByUser,
            likes: state.likes,
            userLikes: state.userLikes
        }} >
            {children}
        </likesContext.Provider>
    );
};

export default LikesContextProvider;
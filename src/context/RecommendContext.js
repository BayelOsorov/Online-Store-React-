import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/const';

export const recomendContext = React.createContext()
const INIT_STATE = {
    recommends: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_RECOMMEND':
            return { ...state, recommends: action.payload }
        default: return state
    }
}
const RecommendContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    let getRecommend = async (id) => {
        try {
            const { data } = await axios(`${API}`)

            let brand = data.filter(item => {
                return item.id == id
            })
            let arr = data.filter(item => {
                return brand[0].brand === item.brand && brand[0].id !== item.id
            })
            dispatch({
                type: 'GET_RECOMMEND',
                payload: arr
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <recomendContext.Provider value={{
            getRecommend,
            recommends: state.recommends
        }}>
            {children}
        </recomendContext.Provider>
    );
};
export default RecommendContextProvider;
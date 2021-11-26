import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/const';


export const adminContext = React.createContext()
const INIT_STATE = {
    products: null,
    productToEdit: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS": {
            return { ...state, products: action.payload }
        }
        case 'GET_PRODUCT_TO_EDIT': {
            return { ...state, productToEdit: action.payload }
        }
        case 'CLEAR_PRODUCT':
            return { ...state, productToEdit: null }
        default: return state
    }
}
const AdminContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async () => {
        try {
            let filter = window.location.search;
            const { data } = await axios(`${API}${filter}`);
            dispatch({
                type: "GET_PRODUCTS",
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const addProduct = async (product) => {
        try {
            await axios.post(API, product)
            getProducts()
        }
        catch (e) {
            console.log(e);
        }
    }


    // fix bag
    const clearProduct = () => {
        dispatch({
            type: 'CLEAR_PRODUCT',
        })
    }
    //

    const getProductToEdit = async (id) => {
        try {
            const { data } = await axios(`${API}/${id}`)
            dispatch({
                type: 'GET_PRODUCT_TO_EDIT',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const saveEditedProduct = async (editedProduct) => {
        try {
            await axios.patch(`${API}/${editedProduct.id}`, editedProduct)
            getProducts()
        }
        catch (e) {
            console.log(e);
        }
    }

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${API}/${id}`)
            getProducts()
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <adminContext.Provider value={{
            addProduct,
            getProducts,
            getProductToEdit,
            saveEditedProduct,
            deleteProduct,
            clearProduct,
            products: state.products,
            productToEdit: state.productToEdit
        }}>
            {props.children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;
import {SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "../constants/action-type";

const initialState = {
    products: [],
    product: null
};

export const productReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_PRODUCTS:
            return { 
                ...state,  
                products: payload
            };
        case SELECTED_PRODUCT:
            return {
                ...state,
                product: payload
            };
        case REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};
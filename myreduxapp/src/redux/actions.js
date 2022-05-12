import axios from "axios";
import { ActionTypes } from "./actionTypes";


export const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
}

export const selectedProduct = product => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const ADD = item => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

//remove items form Cart function
export const DELETE = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
}


//remove individual item
export const REMOVE = (iteam) => {
    return {
        type: "REMOVE_ONE",
        payload: iteam
    }
}
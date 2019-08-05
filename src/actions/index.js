import * as types from './../constants/actionType';


export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
};

export const actChangeMessage = (message) => {
    return {
        type: types.ON_CHANGE_MESSAGE,
        message
    }
};

export const actDeleteProduct = (product) => {
    return {
        type: types.ON_DELETE_PRODUCT_IN_CART,
        product
    }
};

export const actUpdateProduct = (product, quantity) => {
    return {
        type: types.ON_UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
};

export const actUpdateMessage = (message) => {
    return {
        type: types.ON_UPDATE_MESSAGE,
        message
    }
};
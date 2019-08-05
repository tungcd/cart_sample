import * as Types from './../constants/actionType';
var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];



var cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    // console.log(state);
    console.log("3");
    

    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case Types.ON_DELETE_PRODUCT_IN_CART:
            // console.log("a");
            
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case Types.ON_UPDATE_PRODUCT_IN_CART:
            console.log("a");
            
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            console.log("a");
            
            return [...state];

        default: return [...state];
    }
};

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;
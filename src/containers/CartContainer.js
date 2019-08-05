import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import PropTypes from 'prop-types';
import * as Message from './../constants/messageType';
import { actDeleteProduct, actChangeMessage, actUpdateProduct, actUpdateMessage } from './../actions/index';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        // console.log(cart);

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = cart => {
        var { onDeleteProduct, onChangeMessage, onUpdateProduct, onUpdateMessage } = this.props;
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {

                return (<CartItem
                    key={index}
                    item={item}
                    onDeleteProduct={onDeleteProduct}
                    onChangeMessage={onChangeMessage}
                    onUpdateProduct={onUpdateProduct}
                    onUpdateMessage={onUpdateMessage}

                />)
            });
        }
        return result;
    }

    showTotalAmount = cart => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }),
        quantity: PropTypes.number.isRequired
    })).isRequired
}

var mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct: product => {
            dispatch(actDeleteProduct(product));
        },
        onChangeMessage: message => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProduct: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity));
        },
        onUpdateMessage: message => {
            dispatch(actUpdateMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

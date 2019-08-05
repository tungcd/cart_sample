import React, { Component } from 'react';
import * as message from './../constants/messageType';

class CartItem extends Component {
    constructor(props){
        super(props);
        this.state=({
            quantity:1
        });
    }
  render() {
        var { item } = this.props;        
        var { quantity } = this.state;
        quantity =  item.quantity > 0 ? item.quantity : 0 ;
    return (
        <tr>
            <th scope="row">
                <img src={item ? item.product.img : '' }
                    alt='' className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item ? item.product.name : '' }</strong>
                </h5>
            </td>
            <td>{item ? item.product.price : '' }<b> $</b></td>
            <td className="center-on-small-only">
                <span className="qty">{quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label 
                        className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={ () => this.onUpdateProduct( item.product, item.quantity - 1 )}
                        >
                        <a>—</a>
                    </label>
                    <label 
                        className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={ () => this.onUpdateProduct( item.product, item.quantity + 1 )}
                        >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{item ? quantity*item.product.price : '' }<b> $</b></td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="" 
                    data-original-title="Remove item"
                    onClick={ () => this.onDelete(item.product) }
                >
                    Xóa
                </button>
            </td>
        </tr>
    
    );
}

    onDelete = (product) => {
        this.props.onDeleteProduct(product);
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUSSCESS);
    }

    onUpdateProduct = (product,quantity) => {
        if(quantity > 0){
            this.setState({
                quantity:quantity
            });
        }
        this.props.onUpdateProduct(product,quantity);        
        this.props.onUpdateMessage(message.MSG_UPDATE_CART_SUSSCESS);
    }
}


export default CartItem;

import React, { Component } from 'react';
// import CartItem from './CartItem';
// import CartResult from './CartResult';

class Cart extends Component {
    render() {
        return (
            <section className="section">
                <div className="table-responsive"></div>
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                        
                    </tbody>
                </table>
            </section>

        );
    }
}

export default Cart;

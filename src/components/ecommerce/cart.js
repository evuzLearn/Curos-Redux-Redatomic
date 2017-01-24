import React, { Component, PropTypes } from 'react';
import Title from './title';
import CartItem from './cart_item';
import Buttons from './buttons';

class Cart extends Component {
    handleFollowBuy() {
        this.props.onNavigate('catalog');
    }

    handleFinishBuy() {
        this.props.onNavigate('checkout');
    }

    render() {
        const { cart, onChangeQty } = this.props;
        let total = 0;
        const cartItems = cart.map(x => {
            total += x.qty * x.price;
            return <CartItem
                key={x.id}
                product={x}
                onChangeQty={onChangeQty}
                />
        });
        total = total.toFixed(2);
        return (
            <div className="cart">
                <Title title='Productos' />
                <div className="cart-contents">
                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th className="qty">Cant</th>
                                <th className="description">Product</th>
                                <th className="unit-price">Price</th>
                                <th className="subtotal">Total</th>
                                <th className="actions"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems}
                            <tr className="summary">
                                <td colSpan="4" className="total">
                                    {total}€
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="footer">
                    <a className="button" onClick={this.handleFollowBuy.bind(this)}>Seguir comprando</a>
                    {
                        cart.length ? 
                        <a className="button" onClick={this.handleFinishBuy.bind(this)}>Finalizar compra</a> : null
                    }
                </div>
            </div>
        )
    }
}

Cart.PropTypes = {
    onNavigate: PropTypes.func,
    cart: PropTypes.array
}

export default Cart;
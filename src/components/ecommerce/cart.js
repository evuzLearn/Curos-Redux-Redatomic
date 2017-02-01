import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Title from './title';
import CartItem from './cart_item';
import Buttons from './buttons';
import { connect } from 'react-redux';
import { changeQty } from '../../modules/cart';

class Cart extends Component {
    render() {
        const { products, onChangeQty } = this.props;
        let total = 0;
        const cartItems = products.map(x => {
            total += x.qty * x.price;
            return <CartItem
                key={x.id}
                product={x}
                onChangeQty={this.props.changeQty}
                />
        });
        total = total.toFixed(2);
        return (
            <div className="cart">
                <Title title='Carrito de la compra' />
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
                    <Link to='/' className="button">Seguir comprando</Link>
                    {
                        products.length ? 
                        <Link to='/checkout' className="button">Finalizar compra</Link> : null
                    }
                </div>
            </div>
        )
    }
}

Cart.PropTypes = {
    products: PropTypes.array.isRequired,
    changeQty: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.cart
});

const mapDispatchToProps = {
    changeQty
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
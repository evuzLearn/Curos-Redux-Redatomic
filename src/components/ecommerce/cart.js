import React, { Component, PropTypes } from 'react';
import Title from './title';
import CartItem from './cart_item';
import Buttons from './buttons';
import { connect } from 'react-redux';
import { changeQty } from '../../modules/cart';
import { goToCatalog, goToCheckout } from '../../modules/route';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.handleCatalog = this.handleCatalog.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
    }
    handleCatalog() {
        this.props.goToCatalog();
    }

    handleCheckout() {
        this.props.goToCheckout();
    }

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
                    <a className="button" onClick={this.handleCatalog}>Seguir comprando</a>
                    {
                        products.length ? 
                        <a className="button" onClick={this.handleCheckout}>Finalizar compra</a> : null
                    }
                </div>
            </div>
        )
    }
}

Cart.PropTypes = {
    products: PropTypes.array.isRequired,
    changeQty: PropTypes.func.isRequired,
    goToCatalog: PropTypes.func.isRequired,
    goToCheckout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.cart
});

const mapDispatchToProps = {
    changeQty,
    goToCatalog,
    goToCheckout
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
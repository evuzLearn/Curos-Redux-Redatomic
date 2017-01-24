import React, { Component, PropTypes } from 'react';

class CartItem extends Component {
    handlePlus() {
        const { product, onChangeQty } = this.props;
        onChangeQty(product, product.qty + 1);
    }

    handleMinus() {
        const { product, onChangeQty } = this.props;
        onChangeQty(product, product.qty - 1);
    }

    handleRemove() {
        const { product, onChangeQty } = this.props;
        onChangeQty(product, 0);
    }

    render() {
        const { product } = this.props;
        const subtotal = (product.price * product.qty).toFixed(2);
        return (
            <tr>
                <td className="qty">{product.qty}</td>
                <td className="description">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </td>
                <td className="unit-price">{product.price}€</td>
                <td className="subtotal">{subtotal}€</td>
                <td className="actions">
                    <a className="button" onClick={ this.handlePlus.bind(this) }>+ 1</a>
                    <a className="button" onClick={ this.handleMinus.bind(this) }>- 1</a>
                    <a className="button" onClick={ this.handleRemove.bind(this) }>Remove</a>
                </td>
            </tr>
        )
    }
}

CartItem.PropTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onChangeQty: PropTypes.func
}

export default CartItem;
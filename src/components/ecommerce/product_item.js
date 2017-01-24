import React, { Component, PropTypes } from 'react';

class ProductItem extends Component {
    handleAddCart () {
        this.props.onAddCart(this.props.product);
    }
    render() {
        const { product, onAddCart } = this.props;
        return (
            <div className="product row">
                <div className="product-summary col three-fourths">
                    <h2 className="product-title">{ product.name }</h2>
                    <div className="product-details">
                        <div className="product-image col one-fourth">
                            <img src="http://placehold.it/64x64" height="64" width="64" />
                        </div>
                        <div className="product-summary col three-fourths">
                            <p>{ product.description }</p>
                        </div>
                    </div>
                </div>
                <div className="product-add-to-cart col one-fourth">
                    <div className="product-price">{ product.price }€</div>
                    <div className="add-to-cart">
                        <a className="button" onClick={ this.handleAddCart.bind(this) }>Add to cart</a>
                    </div>
                </div>
            </div>
        )
    }
}

ProductItem.PropTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onAddCart: PropTypes.func
}

export default ProductItem;
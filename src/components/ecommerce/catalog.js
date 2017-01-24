import React, { Component, PropTypes } from 'react';
import Title from './title';
import ProductItem from './product_item';

class Catalog extends Component {
    render() {
        const { products, onAddCart } = this.props;
        const productsItem = products.map(x => (
            <ProductItem key={x.id}
                product={ x }
                onAddCart={ onAddCart }
                />
        ))
        return (
            <div className="catalog">
                <Title title='Productos' />
                <div className="catalog-list">
                    {productsItem}
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

Catalog.PropTypes = {
    products: PropTypes.array,
    onAddCart: PropTypes.func
}

export default Catalog;
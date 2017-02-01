import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchProducts } from '../../modules/catalog/actions';
import { addToCart } from '../../modules/cart';

import Title from './title';
import ProductItem from './product_item';

class Catalog extends Component {
    constructor (props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentDidMount () {
        if (this.props.products.length > 0) return;
        this.props.fetchProducts();
    }

    handleAddToCart (product) {
        this.props.addToCart(product);
        this.props.router.push('/cart');
    }

    render() {
        const { products } = this.props;
        const productsItem = products.map(x => (
            <ProductItem key={x.id}
                product={ x }
                onAddCart={ this.handleAddToCart }
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
    fetchProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    router: PropTypes.object
}

const mapStateToProps = state => {
    const products = state.catalog.productsIds.map(x => state.catalog.byId[x]);
    return {
        products,
        isFetching: state.catalog.isFetching,
        errors: state.catalog.errors
    }
}

const mapDispatchToProps = {
    fetchProducts,
    addToCart
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Catalog)
);
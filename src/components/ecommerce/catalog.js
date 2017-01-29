import React, { Component, PropTypes } from 'react';
import Title from './title';
import ProductItem from './product_item';
import { products as catalogProducts } from '../../data/catalog';
import { connect } from 'react-redux';
import { saveProducts } from '../../modules/catalog/actions';
import { addToCart } from '../../modules/cart';
import { goToCart } from '../../modules/route';

class Catalog extends Component {
    constructor (props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentDidMount () {
        this.props.saveProducts(catalogProducts);
    }

    handleAddToCart (product) {
        this.props.addToCart(product);
        this.props.goToCart();
    }

    render() {
        const { products, onAddCart } = this.props;
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
    saveProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    goToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        products: state.catalog
    }
}

const mapDispatchToProps = {
    goToCart,
    saveProducts,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
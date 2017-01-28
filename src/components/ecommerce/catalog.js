import React, { Component, PropTypes } from 'react';
import Title from './title';
import ProductItem from './product_item';
import { products as catalogProducts } from '../../data/catalog';
import { saveProducts } from '../../modules/catalog/actions';
import { connect } from 'react-redux';

class Catalog extends Component {
    componentDidMount () {
        setTimeout(() => {
            this.props.dispatch(saveProducts(catalogProducts));
        }, 500)
    }

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

const mapStateToProps = state => {
    return {
        products: state.catalog
    }
}

export default connect(mapStateToProps)(Catalog);
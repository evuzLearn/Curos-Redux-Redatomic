import React, { Component, PropTypes } from 'react';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thank_you';
import { connect } from 'react-redux';  

class Ecommerce extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            checkoutOrder: {},
            errorOrders: {}
        }
        this.handlePageComponent = this.handlePageComponent.bind(this);
        this.handleAddCart = this.handleAddCart.bind(this);
        this.handleChangeQty = this.handleChangeQty.bind(this);
        this.handleProcessOrder = this.handleProcessOrder.bind(this);
        this.handleBackToCart = this.handleBackToCart.bind(this);
    }

    handleAddCart(product) {
        let cartItems = this.state.cart;
        let productExist = cartItems.find(x => x.id == product.id);
        if (productExist) {
            productExist.qty += 1;
        } else {
            const newProduct = Object.assign({}, product, { qty: 1 });
            cartItems = cartItems.concat([newProduct]);
        }
        this.setState({
            cart: cartItems,
            page: 'cart'
        })
    }

    handleChangeQty(product, qty) {
        const cartItems = this.state.cart.map(x => {
            if (x.id == product.id) {
                x.qty = qty;
            }
            return x;
        }).filter(x => x.qty > 0);

        this.setState({
            cart: cartItems
        })
    }

    handleProcessOrder(details) {
        var errors = {}
        if (details.firstName == '') {
            errors.firstName = 'El campo nombre es obligatorio'
        }
        if (details.lastName == '') {
            errors.lastName = 'El campo apellidos es obligatorio'
        }
        if (details.email == '') {
            errors.email = 'El campo email es obligatorio'
        }
        if (details.address == '') {
            errors.address = 'El campo dirección es obligatorio'
        }
        if(Object.keys(errors).length > 0) {
            this.setState({
                errorOrders: errors
            })
        } else {
            this.setState({
                checkoutOrder: details,
                cart: [],
                page: 'thankYou',
                errorOrders: {}
            })
        }
    }

    handlePageComponent(page) {
        this.setState({
            page: page
        })
    }

    handleBackToCart() {
        this.setState({
            page: 'cart',
            errorOrders: {}
        })
    }

    render() {
        const component = this.getPageComponent(this.props.route); 
        return (
            <div className="shopping-cart">
                { component }
            </div>
        )
    }

    getPageComponent(page) {
        switch (page) {
            case 'catalog':
                return <Catalog
                    onAddCart={this.handleAddCart}
                    />
            case 'cart':
                return <Cart
                    cart={this.state.cart}
                    onChangeQty={this.handleChangeQty}
                    onNavigate={this.handlePageComponent}
                    />
            case 'checkout':
                return <Checkout
                    onBackToCart={this.handleBackToCart}
                    onProcessOrder={this.handleProcessOrder}
                    errors={this.state.errorOrders}
                    />
            case 'thankYou':
                return <ThankYou 
                orderDetails={ this.state.checkoutOrder }
                onBackToShop={ () => this.handlePageComponent('catalog')} />
        }
    }
}

Ecommerce.PropTypes = {
    route: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    route: state.route
})

export default connect(mapStateToProps)(Ecommerce);
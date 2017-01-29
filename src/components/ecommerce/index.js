import React, { Component, PropTypes } from 'react';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thank_you';
import { connect } from 'react-redux';  

class Ecommerce extends Component {
    getPageComponent(page) {
        switch (page) {
            case 'catalog':
                return <Catalog />
            case 'cart':
                return <Cart />
            case 'checkout':
                return <Checkout />
            case 'thankYou':
                return <ThankYou />
        }
    }

    render() {
        const component = this.getPageComponent(this.props.route); 
        return (
            <div className="shopping-cart">
                { component }
            </div>
        )
    }
}

Ecommerce.PropTypes = {
    route: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    route: state.route
})

export default connect(mapStateToProps)(Ecommerce);
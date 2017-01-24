import React, { Component, PropTypes } from 'react';
import Title from './title';

class ThankYou extends Component {
    render() {
        const { orderDetails, onBackToShop } = this.props;
        return (
            <div className="thank-you">
                <Title title='Productos'/>

                <p>Gracias { orderDetails.firstName }, tu pedido llegará en breve a la dirección: { orderDetails.address }</p>
                <p><button className="button" onClick={onBackToShop}>Volver a la tienda</button></p>
            </div>
        )
    }
}

ThankYou.PropTypes = {
    orderDetails: PropTypes.shape({
        address: PropTypes.string,
        firstName: PropTypes.string
    }).isRequired,
    onBackToShop: PropTypes.func
}

export default ThankYou;
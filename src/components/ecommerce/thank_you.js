import React, { Component, PropTypes } from 'react';
import { connect } from   'react-redux';
import { Link } from 'react-router'
import Title from './title';

const ThankYou = ({details, goToCatalog}) => (
    <div className="thank-you">
        <Title title='¡Gracias por su compra!' />

        <p>Gracias {details.firstName}, tu pedido llegará en breve a la dirección: {details.address}</p>
        <p><Link to='/' className="button">Volver a la tienda</Link></p>
    </div>
);

ThankYou.PropTypes = {
    details: PropTypes.shape({
        address: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired
    }).isRequired
}

const mapStateToProps = state => ({
    details: state.order.details
});

export default connect(mapStateToProps)(ThankYou);
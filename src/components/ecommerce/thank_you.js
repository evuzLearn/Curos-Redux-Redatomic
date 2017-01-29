import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { goToCatalog } from '../../modules/route';
import Title from './title';

const ThankYou = ({details, goToCatalog}) => (
    <div className="thank-you">
        <Title title='Productos' />

        <p>Gracias {details.firstName}, tu pedido llegará en breve a la dirección: {details.address}</p>
        <p><button className="button" onClick={goToCatalog}>Volver a la tienda</button></p>
    </div>
);

ThankYou.PropTypes = {
    details: PropTypes.shape({
        address: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired
    }).isRequired,
    goToCatalog: PropTypes.func
}

const mapStateToProps = state => ({
    details: state.order.details
});

const mapDispatchToProps = {
    goToCatalog
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
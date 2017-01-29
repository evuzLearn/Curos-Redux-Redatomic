import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveOrder, saveDetails } from '../../modules/order';
import { goToCart } from '../../modules/route';
import Title from './title';
import CheckoutFormItem from './checkout_form_item';
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.saveOrder(this.props.details);
    }

    handleFieldChange (e) {
        this.props.saveDetails({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { errors, details } = this.props;
        return (
            <div className="checkout">
                <Title title='Productos' />

                <div className="checkout-form">
                    <CheckoutFormItem label="Nombre" error={errors.firstName}>
                        <input
                            type="text"
                            name="firstName"
                            value={details.firstName}
                            onChange={this.handleFieldChange}
                            className={ errors.firstName ? "error" : "" }
                            />
                    </CheckoutFormItem>
                    <CheckoutFormItem label="Apellidos" error={errors.lastName}>
                        <input
                            type="text"
                            name="lastName"
                            value={details.lastName}
                            onChange={this.handleFieldChange}
                            className={ errors.lastName ? "error" : "" }
                            />
                    </CheckoutFormItem>
                    <CheckoutFormItem label="Email" error={errors.email}>
                        <input
                            type="text"
                            name="email"
                            value={details.email}
                            onChange={this.handleFieldChange}
                            className={ errors.email ? "error" : "" }
                            />
                    </CheckoutFormItem>
                    <CheckoutFormItem label="Dirección" error={errors.address}>
                        <textarea
                            name="address"
                            value={details.address}
                            onChange={this.handleFieldChange}
                            className={ errors.address ? "error big" : "" }
                            />
                    </CheckoutFormItem>
                    <div className="row">
                        <div className="col one-one">
                            <button className="button" onClick={this.props.goToCart}>Volver</button>
                        </div>
                        <div className="col two-one">
                            <button className="button" onClick={this.handleSubmit}>Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Checkout.PropTypes = {
    errors: PropTypes.object,
    details: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,  
    }),
    goToCart: PropTypes.func.isRequired,
    saveDetails: PropTypes.func.isRequired,
    saveOrder: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    errors: state.order.errors,
    details: state.order.details
})

const mapDispatchToProps = {
    saveDetails,
    saveOrder,
    goToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
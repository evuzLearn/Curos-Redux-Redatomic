import React, { Component, PropTypes } from 'react';
import Title from './title';
import CheckoutFormItem from './checkout_form_item';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: ''
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleBackToCart = this.handleBackToCart.bind(this);
    }

    handleFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClickButton(e) {
        e.preventDefault();
        this.props.onProcessOrder(Object.assign({}, this.state));
    }

    handleBackToCart() {
        this.props.onBackToCart('cart');
    }

    render() {
        const { firstName, lastName, email, address } = this.state;
        const { errors } = this.props;
        return (
            <div className="checkout">
                <Title title='Productos' />

                <div className="checkout-form">
                    <CheckoutFormItem label="Nombre" error={errors.firstName}>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleFieldChange}
                            className={ errors.firstName ? "error" : "" }
                            />
                    </CheckoutFormItem>
                    <CheckoutFormItem label="Apellidos" error={errors.lastName}>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleFieldChange}
                            className={ errors.lastName ? "error" : "" }
                            />
                    </CheckoutFormItem>
                    <CheckoutFormItem label="Email" error={errors.email}>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleFieldChange}
                            className={ errors.email ? "error" : "" }
                            />
                    </CheckoutFormItem>
                    <CheckoutFormItem label="Dirección" error={errors.address}>
                        <textarea
                            name="address"
                            value={address}
                            onChange={this.handleFieldChange}
                            className={ errors.address ? "error big" : "" }
                            />
                    </CheckoutFormItem>
                    <div className="row">
                        <div className="col one-one">
                            <button className="button" onClick={this.handleBackToCart}>Volver</button>
                        </div>
                        <div className="col two-one">
                            <button className="button" onClick={this.handleClickButton}>Finalizar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Checkout.PropTypes = {
    errors: PropTypes.object,
    onProcessOrder: PropTypes.func.isRequired,
    onBackToCart: PropTypes.func.isRequired,
}

export default Checkout;
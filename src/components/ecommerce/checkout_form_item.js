import React, { Component, PropTypes } from 'react';

const CheckoutFormItem = (props) => {
    const { error, children, label } = props;
    return (
        <div className="row">
            <div className="col one-third">
                <label>{ label }</label>
            </div>
            <div className="col two-thirds">
                    { children }
                    <span className="error-text">{error}</span>
            </div>
        </div>
    )
}

CheckoutFormItem.PropTypes = {
    label: PropTypes.string,
    error: PropTypes.string
}

export default CheckoutFormItem;
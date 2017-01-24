import React, { Component, PropTypes } from 'react';

const Buttons = (props) => {
    return (
        <div className="footer">
            <a className="button" onClick={ props.onFollowBuy }>Seguir comprando</a>
            <a className="button" onClick={ props.onFinishBuy }>Finalizar compra</a>
        </div>
    )
}

export default Buttons;
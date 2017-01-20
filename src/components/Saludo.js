import React, { Component, PropTypes } from 'react';

class Saludo extends Component {
    render (){
        const { text, user} = this.props;
        return (
            <div>{text},  {user.name} {user.lastname}</div>
        )
    }
}

Saludo.PropTypes = {
    text: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    })
}

export default Saludo;
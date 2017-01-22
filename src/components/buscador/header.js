import React, { Component, PropTypes } from 'react';

const Header = (props) => (
    <div className='search-title'>
        <div className='row'>
            <h1>{props.text}</h1>
        </div>
    </div>
)

Header.PropTypes = {
    text: PropTypes.string
}

export default Header;
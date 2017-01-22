import React, { Component, PropTypes } from 'react'

const Summary = (props) => (
    <div className="search-results-summary">
        <div className="row">
            Encontrados {props.total} personajes
    </div>
    </div>
)

Summary.PropTypes = {
    total: PropTypes.number
}

export default Summary;
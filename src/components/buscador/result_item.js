import React, {Component, PropTypes} from 'react';

const ResultItem = (props) => (
    <tr>
    <td>{props.item.name}</td>
    <td>{props.item.actor}</td>
    <td className="center">{props.item.seasons.join(', ')}</td>
    <td className="center">{props.item.alive ? 'Sí' : 'No'}</td>
    </tr>
)

export default ResultItem;
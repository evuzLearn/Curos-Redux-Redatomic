import React, { Component, PropTypes } from 'react';
import ResultItem from './result_item';
import Summary from './summary';

const Result = (props) => {
    const { data } = props;
    const items = props.data.map(item => (
        <ResultItem key={item.actor} item={item} />
    ))
    return (
        <div>
            <div className="search-results">
                <table>
                    <thead>
                        <tr>
                            <th>Personaje</th>
                            <th>Actor</th>
                            <th className='center'>Temporadas</th>
                            <th className='center'>Vivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
            <Summary total={items.length} />
        </div>
    )
}

Result.PropTypes = {
    data: PropTypes.array
}

export default Result;
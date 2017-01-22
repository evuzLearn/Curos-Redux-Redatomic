import React, { Component, PropTypes } from 'react';

const SeasonOption = (props) => {
    const {season, isChecked, onChange} = props;
    return (
        <div className="season-option">
            {season} 
            <input 
            type="checkbox"
            // name='s1' 
            name={season}
            // value ={season}
            checked={isChecked}
            onChange={onChange}
            />
        </div>
    )
}

SeasonOption.PropTypes = {
    season: PropTypes.number.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default SeasonOption;
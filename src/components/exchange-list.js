import React from 'react';

export default props =>
<div>
        <div className="main container full-width center-text">
        when
        </div>
        <div className="main container full-width center-text">
            <select onChange={ props.selectExchange }>
                { props.exchangeList.map((value) => <option
                    key={value.key}
                    value={value.key}>{value.name}</option>)}
                {props.exchangeList.length > 0 ? null : <option>Loading exchanges...</option> }
            </select>
        </div>
    </div>

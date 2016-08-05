import React from 'react';

let ExchangeList = (props) => {
        return <div>
                    <div className="main container full-width center-text">
                    Send an alert when
                    </div>
                    <div className="main container full-width center-text">
                        <select onChange={ props.selectExchange }>
                            {Object.keys(props.exchanges).map((value) => <option
                                key={props.exchanges[value].key}
                                value={value}>{props.exchanges[value].name}</option>)}
                        </select>
                    </div>
                </div>
    };

export default ExchangeList;

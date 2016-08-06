import React from 'react';

let ExchangeList = (props) => {
        const { exchanges } = props
        return <div>
                    <div className="main container full-width center-text">
                    when
                    </div>
                    <div className="main container full-width center-text">
                        <select onChange={ selectExchange }>
                            { exchanges.map((value) => <option
                                key={exchanges[value].key}
                                value={value}>{exchanges[value].name}</option>) }
                        </select>
                    </div>
                </div>
    };

export default ExchangeList;

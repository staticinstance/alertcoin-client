import React from 'react';

let ExchangeList = (props) => {
        const { exchangeList, selectExchange } = props
        return <div>
                    <div className="main container full-width center-text">
                    when
                    </div>
                    <div className="main container full-width center-text">
                        <select onChange={ selectExchange }>
                            { exchangeList.map((value) => <option
                                key={value.key}
                                value={value.key}>{value.name}</option>) }
                        </select>
                    </div>
                </div>
    };

export default ExchangeList;

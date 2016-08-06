import React from 'react';

let ExchangeList = (props) => {
        const { pairs, selectPair } = props;
        return <div>
                    <div className="main container full-width center-text">
                    has
                    </div>
                    <div className="main container full-width center-text">
                        <select onChange={ selectPair }>
                            { pairs.map((value) => <option
                                key={pairs[value].key}
                                value={value}>{pairs[value].name}</option>) }
                        </select>
                    </div>
                </div>
    };

export default ExchangeList;

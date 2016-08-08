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
                            key={value.key}
                            value={value.name}>{value.name}</option>) }
                    </select>
                </div>
            </div>
};

export default ExchangeList;

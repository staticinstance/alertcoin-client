import React from 'react';

let ExchangeList = (props) => {
        return <div>
                    <div className="main container full-width center-text">
                    has the pair
                    </div>
                    <div className="main container full-width center-text">
                        <select onChange={ props.selectPair }>
                            {Object.keys(props.pairs).map((value) => <option
                                key={props.pairs[value].key}
                                value={value}>{props.pairs[value].name}</option>)}
                        </select>
                    </div>
                </div>
    };

export default ExchangeList;

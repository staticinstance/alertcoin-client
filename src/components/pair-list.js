import React from 'react';

export default props =>
            <div>
                        <div className="main container full-width center-text">
                        has
                        </div>
                        <div className="main container full-width center-text">
                        <select onChange={ props.selectPair }>
                        { props.pairList.map((value) =>
                            <option
                                key={value.key}
                                value={value.key}>
                                {value.name}</option>) }
                        </select>
                        </div>
            </div>

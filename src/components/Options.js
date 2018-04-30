

import React from 'react';
import Option from './Option';


const Options = (props) => {

    return(
        <div>
            {props.options.length === 0 && <p>Please add some options to get started! </p>}
            {props.options.map((option) => (<Option 
                key={option} option={option}
                handleDeleteOption={props.handleDeleteOption}
            />))}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
};

export default Options;



//Higher Order Component
//reuse code, render hijacking, prop manipulation, abstract state

//------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
        <div>
            <h1>Info</h1>
            <p>This is info: {props.info}</p>
        </div>
);

//------------------------------------------------------------------------------------

const withAdminWarning = (WrappedComponent) => {

    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, pls do not share.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

//------------------------------------------------------------------------------------

const AdminInfo = withAdminWarning(Info);

//------------------------------------------------------------------------------------

ReactDOM.render(<AdminInfo isAdmin={false} info="Hello Info" />, document.getElementById('app'));
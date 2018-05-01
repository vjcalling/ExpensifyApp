import React from 'react';

const EditExpensePage = (props) => {

    console.log(props);
    return (
        <div>
            This is from dashboard for edit for id {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;

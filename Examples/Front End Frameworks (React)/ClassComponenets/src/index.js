import React from 'react';
import ReactDOM from 'react-dom';
import Connected from './Connected.js';

let values = {
    status: "Not Connected",
    firstName: "Luis",
    lastName: null
}

ReactDOM.render(
    <Connected status={values.status} firstName={values.firstName} lastName={values.lastName} />,
    document.getElementById('root')
);

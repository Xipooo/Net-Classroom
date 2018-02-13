import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//     React.createElement(
//         "div", 
//         null, 
//         React.createElement('h1', null, 'Hello'),
//         React.createElement('h3', null, 'World')
//     ), 
//     document.getElementById("root")
// );

var ce = (tag, elem) => React.createElement(tag, null, elem);

ReactDOM.render(
    React.createElement(
        'ul',
        null,
        ce('li', 'Item 1'),
        React.createElement('ul', null, ce('li', 'Item A'), ce('li', 'Item B'), ce('li', 'Item C')),
        ce('li', 'Item 2'),
        ce('li', 'Item 3')
    ),
    document.getElementById('root')
);
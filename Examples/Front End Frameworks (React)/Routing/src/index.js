import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Mine, Search } from './screens/index.js';

const Index = (props) => {
    switch (props.pathname){
        case "/search":
            return <Search />;
        case "/mine":
            return <Mine />;
        default:
            return <Home />;
    }
}

let pathname = window.location.pathname;

ReactDOM.render(
    <Index pathname={pathname} />,
    document.getElementById('root')
)

window.onpopstate = () => { pathname = window.location.pathname; }

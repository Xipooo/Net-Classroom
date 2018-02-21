import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Mine, Search } from './screens/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let initialState = { repos: [], search: "" }

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "SAVE_REPOS":
            return { ...state, repos: action.payload };
        default:
            return state; 
    }
} 

const Index = ({ store }) =>
(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/mine" component={Mine} />
                <Route path="/search" component={Search} />
                <Route path="/" component={Home} exact/>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    <Index store={createStore(reducer)}/>,
    document.getElementById('root')
);

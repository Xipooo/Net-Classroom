import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

const initialState = { value: 0 };

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
    <div>
        <h2>Value: {value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + action.payload };
        case 'DECREMENT':
            return { ...state, value: state.value - action.payload };
        case 'RESET':
            return { ...state, value: 0 };
        default:
            return state;
    }
}

const store = createStore(reducer);

const mapStateToProps = (state) => { return { value: state.value } };
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT', payload: 5 }),
        onDecrement: () => dispatch({ type: 'DECREMENT', payload: 2 }),
        onReset: () => dispatch({ type: 'RESET' })
    }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedCounter />
    </Provider>,
    document.getElementById('root')
);

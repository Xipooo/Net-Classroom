// This code will not work
const CountState = ({ state }) =>
    (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={state => this.setState({ ...state, count: state.count + 1 })}>Increment</button>
        </div>
    )
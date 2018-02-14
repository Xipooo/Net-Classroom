import React from 'react';

export default class BankAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            savings: {
                accountBalance: 25.0
            },
            checking: {
                accountBalance: 0.0
            },
            increment: 0
        };
        //this.state = { accountBalance: 25.0 }
    }

    shouldComponentUpdate(nextProps, nextState){
        return (nextState.increment != 0);
    }

    increment() {
        this.setState({ 
            ...this.state, 
            savings: { accountBalance: this.state.savings.accountBalance + this.state.increment } });
        // this.state = { accountBalance: this.state.accountBalance + amt}; <--wrong
    }

    render() {
        console.log("Render called");
        return (
            <div>
                <h3>Account Balance: {this.state.savings.accountBalance}</h3>
                <input
                    type="number"
                    onChange={(event) => this.setState({ ...this.state, increment: parseInt(event.target.value) })} 
                    value={this.state.increment} />
                <button onClick={this.increment.bind(this)}>Increase Amount</button>
            </div >
        )
    }
}
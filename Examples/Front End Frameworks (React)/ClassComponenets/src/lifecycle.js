import React from 'react';
import ReactDOM from 'react-dom';

// const Hello = (props) => {
//     return (
//         <div>
//             <h1>hello, {props.name}</h1>
//         </div>
//     );
// }

class Hello extends React.Component {
    constructor() {
        super();
        this.myVal = 1;
        console.log("constructor: " + this.myVal);
    }
    componentWillMount() {
        this.myVal++;
        console.log("componentWillMount: " + this.myVal);
    }
    componentDidMount() {
        this.myVal++;
        console.log("componentDidMount: " + this.myVal);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.name != nextProps.name) {
            this.myVal++;
            console.log("componentWillReceiveProps: " + this.myVal);
        }
    }
    shouldComponentUpdate(nextProp, nextState) {
        this.myVal++;
        console.log("shouldComponentUpdate: " + this.myVal);
        if (this.props.name != nextProps.name) {
            return true;
        }
        return false;
    }

    render() {
        this.myVal++;
            console.log("render: " + this.myVal);
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Hello name="Nikki" />
        <Hello name="Michael" />
        <Hello name="Andrew" />
    </div>,
    document.getElementById("root")
);
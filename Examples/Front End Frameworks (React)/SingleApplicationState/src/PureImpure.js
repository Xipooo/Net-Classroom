import React from 'react';
import { render } from 'react-dom';

class Demo extends React.Component {
    render() {
        return (<div><h1>Hello, {props.name}</h1></div>);
    }
}

render(<Demo />, document.getElementById('root'));
// // Pure function
// function sum(props){
//     return props.a + props.b;
// }

// // Impure function
// function travel(props){
//     props.distance -= props.speed;
//     return props.distance;
// }

// // Pure function
// const Hello = props => (<div><h1>Hello, {props.name}</h1></div>);

const obj = { first: "Foo", last: "Bar"};

// const first = obj.first;
// const last = obj.last;

// Destructure
const {first, last} = obj;
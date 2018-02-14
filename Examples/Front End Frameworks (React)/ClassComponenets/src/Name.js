import React from 'react';

class Name extends React.Component {
    render(){
        return (<span>{this.props.firstName} {this.props.lastName}</span>);
    }
}

export default Name;
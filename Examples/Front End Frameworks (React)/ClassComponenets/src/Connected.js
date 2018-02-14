import React from 'react';
import Name from './Name.js';
import PropTypes from 'prop-types';

class Connected extends React.Component {
    render() {
        return (
            <div>
                <Name firstName={this.props.firstName} lastName={this.props.lastName} /> is {this.props.status}.
            </div>
        );
    }
}

Connected.propTypes ={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    status: PropTypes.string.isRequired
}

export default Connected;
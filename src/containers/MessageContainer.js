import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../components/Message';
import PropTypes from 'prop-types';
// import Cart from './../components/Cart';
// import CartResult from './../components/CartResult';
// import * as Message from './../constants/messageType';

class MessageContainer extends Component {

    render() {
        var { message } = this.props;
        // console.log(message);

        return (
            <Message message={message} />
        );
    }

}

MessageContainer.propType = {
    message: PropTypes.string.isRequired
}

var mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);

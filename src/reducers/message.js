import * as Types from './../constants/actionType';
import * as Message from './../constants/messageType';

var initialState = Message.MSG_WELCOME;



var message = (state = initialState, action) => {

    switch (action.type) {
        case Types.ON_CHANGE_MESSAGE:
            // console.log(action.message);
            return action.message;

        default: return [...state];
    }
};



export default message;
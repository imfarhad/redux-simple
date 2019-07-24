import { UPDATE_USER } from '../actions/user-actions';
import { SHOW_ERROR } from '../actions/api-actions';

const INITIAL_STATE = '';

const userReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type){

        case UPDATE_USER:
            return payload.user;

        case 'Change':
            return payload.user;

        case SHOW_ERROR:
            return payload.user;
        
        default:
            return state;
    }
}

export default userReducer;
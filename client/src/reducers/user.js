import { Save_User } from '../actions/types';

export default function user(state = [], action) {
    switch (action.type) {
        case Save_User:
            return action.user;
        default:
            return state;
    }
}
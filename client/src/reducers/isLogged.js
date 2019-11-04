import { Logged_In } from '../actions/types';

export default function user(state = false, action) {
    switch (action.type) {
        case Logged_In:
            return action.isLogged;
        default:
            return state;
    }
}
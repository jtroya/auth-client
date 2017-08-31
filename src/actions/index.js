import axios from 'axios';
import { browserHistory } from 'react-router';
import {AUTH_ERROR, AUTH_USER, UNAUTH_USER} from "./Types";

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then( response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/private');
            })
            .catch(() => {
                dispatch(authError('Bad login info'));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER }
}

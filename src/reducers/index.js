import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

import authReducer from './AuthReducer';

const rootReducer = combineReducers({
    form: reducer,
    auth: authReducer
});

export default rootReducer;

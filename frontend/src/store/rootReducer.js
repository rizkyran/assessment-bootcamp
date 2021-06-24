import { combineReducers } from 'redux'
import siteReducer from './reducer/site'
import user from './reducer/user';


const rootReducer = combineReducers({
    user : user,
    site : siteReducer,
})

export default rootReducer;


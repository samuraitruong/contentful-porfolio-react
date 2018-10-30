import { combineReducers } from "redux";
import { SAMPLE_ACTION_RESPONSE } from "./actions";

const initialState = {
    text: "waiting"
}

function sayHello(state : any, {type, text} : any) {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch (type) {
        case SAMPLE_ACTION_RESPONSE:

            // For now, don't handle any actions and just return the state given to us.
            return {
                ...state,
                text: "Hello 123: " + text
            }
    }
    return state;

}

const rootReducers = combineReducers({sayHello})
export default rootReducers;

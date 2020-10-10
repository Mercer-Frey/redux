import { combineReducers } from "redux"
import { CHANGE_THEME, DEC, DISABLE_BTNS, ENABLE_BTNS, INC } from "./types"

function counterReducer(state = 0, action){
    if(action.type === INC){
        return state + 1
    }
    if(action.type === DEC){
        return state - 1
    }
    return state
}
const initialStateTheme = { value: 'light', disabled: false }

function themeReducer(state = initialStateTheme, action){
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, value: action.payload }
        case DISABLE_BTNS: 
            return { ...state, disabled: true }
        case ENABLE_BTNS: 
            return { ...state, disabled: false }
        default: return state
    }
}
export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})
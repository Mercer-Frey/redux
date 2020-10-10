import { DEC, INC, CHANGE_THEME, DISABLE_BTNS, ENABLE_BTNS } from "./types";

export function enableBtns(){
    return { type: ENABLE_BTNS }
}
export function disableBtns(){
    return { type: DISABLE_BTNS }
}
export function increment(){
    return { type: INC }
}
export function decrement(){
    return { type: DEC }
}
export function changeTheme(newTheme){
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}
export function asyncInrement(){
    return function(dispatch) {
        dispatch(disableBtns())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableBtns())
    }, 1000);
    }
}
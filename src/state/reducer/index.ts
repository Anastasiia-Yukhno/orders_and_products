import { defaultState } from ".."
import { DELETE_ORDER } from "../actionTypes"

export const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
       
        case DELETE_ORDER:
            return {
                ...state,
                orders: action.value,
            }

        default:
            return state
    }
}
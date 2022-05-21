import { typesLogin } from "../types/typesLogin";

export const loginReducers = (state ={}, action) => {
    switch (action.type) {
        case typesLogin.login:
            return{
                ...state
            }
            default:
                return state;
    }
}
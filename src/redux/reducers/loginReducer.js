import { typesLogin } from "../types/typesLogin";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.login:

        return{
            id: action.payload.id,
            name: action.payload.displayname
        }
        case typesLogin.logout:
            return [] 
        default:
          return state;
    }
}
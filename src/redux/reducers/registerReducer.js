import { typesLogin } from "../types/typesLogin";

export const registerReducers = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.register:
  
        return{
            email: action.payload.email,
            password: action.payload.password,
            nombre: action.payload.nombre,
            apellido: action.payload.apellido
        }
        default:
            return state;
    }
  }
import { typesLogin } from "../types/typesLogin"


export const loginSincrono = (id, displayname) => {

    return{
        type: typesLogin.login,
        payload: {
            id,
            displayname
        }
    }
}
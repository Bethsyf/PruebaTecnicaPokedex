import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesLogin } from "../types/typesLogin"

export const registerAsync = (email, pass, nombre) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
            .then(async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, { displayName: nombre })
                dispatch(registerSync(email, pass, nombre))
                console.log('Usuario Registrado de manera exitosa')
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }

}

export const registerSync = (email, pass, name) => {
    return {
        type: typesLogin.register,
        payload: {
            email, pass, name
        }
    }
}

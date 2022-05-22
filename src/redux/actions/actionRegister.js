import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesLogin } from "../types/typesLogin"

export const registerAsync = (email, password, nombre, apellido) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, { displayName: nombre})
                dispatch(registerSync(email, password, nombre, apellido))
                console.log('Usuario Registrado de manera exitosa')
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }

}

export const registerSync = (email, password, nombre, apellido) => {
    return {
        type: typesLogin.register,
        payload: {
            email, password, nombre, apellido
        }
    }
}

import { loginSincrono, logout } from "../../../redux/actions/actionLogin";
import { typesLogin } from "../../../redux/types/typesLogin";

describe('Verificar las acciones del Login', () => {
    test('Validar el login sincronico', () => {
        const id = 'Prueba';
        const displayname = 'Bethsy';
        const loginAction = loginSincrono(id, displayname);

        expect(loginAction).toEqual({
            type: typesLogin.login,
            payload: {
                id,
                displayname
            }
        })
    })

    test('Cerrar sesion', () => {
        const id = 'Prueba';
        const displayname = 'Bethsy';
        const logoutAction = logout(id, displayname);
        expect(logoutAction).toEqual({
            type: typesLogin.logout,
        })
    })
})
import { registerSync } from "../../../redux/actions/actionRegister";
import { typesLogin } from "../../../redux/types/typesLogin";

describe('Verificar las acciones del register', () => {
    test('Validar el register sincronico', () => {
        const email = 'Prueba';
        const pass = 'Prueba';
        const name = 'Prueba';
        const registerAction = registerSync(email, pass, name);

        expect(registerAction).toEqual({
            type: typesLogin.register,
            payload: {
                email, pass, name
            }
        })
    })
})
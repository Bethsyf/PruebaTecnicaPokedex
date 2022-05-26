import { registerReducer } from "../../../redux/reducers/registerReducer";
import { typesLogin } from "../../../redux/types/typesLogin";

describe('Pruebas en registerReducer', () => {
    test('debe realizar el registro', () => {
        const initState = {}

        const action = {
            type: typesLogin.register,
            payload: {
                email: 'bethsyfalcon@gmail.com',
                pass: '123456',
                name: 'bethsy'
            }
        }
        const state = registerReducer(initState, action);
        expect(state).toEqual({
            email: 'bethsyfalcon@gmail.com',
            pass: '123456',
            name: 'bethsy'
        })
    })

    test('estado por defecto', () => {
        const initState = {
            id: 'prueba',
            name: 'Bethsy'
        }
        const action = {
            type: typesLogin.OtroType,
        }
        const state = registerReducer(initState, action);
        expect(state).toEqual(initState)
    })

})
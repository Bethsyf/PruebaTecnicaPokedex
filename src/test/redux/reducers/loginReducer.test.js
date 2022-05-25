import { loginReducer } from "../../../redux/reducers/loginReducer";
import { typesLogin } from "../../../redux/types/typesLogin";

describe('Pruebas en loginReducer', () => {
    test('debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: typesLogin.login,
            payload: {
                id: 'prueba',
                displayname: 'Bethsy'
            }
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual({
            id: 'prueba',
            name: 'Bethsy'
        })
    })   
    test('Cerrar sesion logout', () => {
        const initState = {
            id: 'prueba',
            name: 'Bethsy'
        }

        const action = {
            type: typesLogin.logout,
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual([])
    })

    test('estado por defecto', ()=> {
        const initState = {
            id: 'prueba',
            name: 'Bethsy' 
        }
        const action = {
            type: typesLogin.OtroType,
        }
        const state = loginReducer(initState, action);
        expect (state).toEqual(initState)
    }) 
})
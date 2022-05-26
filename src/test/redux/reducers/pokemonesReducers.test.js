import { pokemonesReducers } from "../../../redux/reducers/pokemonesReducers";
import { typesPokemon } from "../../../redux/types/typesPokemon";

describe('Pruebas en PokemonesReducers', () => {
    test('debe de Agregar Pokemon', () => {
        const initState = {
            pokemones: []
        }
        const action = {
            type: typesPokemon.add,
            payload: {
                nombre: 'nombre'
            }
        }
        const state = pokemonesReducers(initState, action);
        expect(state).toEqual({
            pokemones: [{
                nombre: 'nombre'
            }]
        })
    })
    test('debe de Editar al pokemon', () => {
        const initState = {
            pokemones: []
        }
        const action = {
            type: typesPokemon.edit,
            payload: {
                nombre: 'nombre',
            }
        }
        const state = pokemonesReducers(initState, action)
        expect(state).toEqual({
            ...state
        })
    })

    test('debe de  Borrar pokemon', () => {
        const initState = {
            pokemones: []
        }
        const action = {
            type: typesPokemon.delete,
            payload: {
                nombre: 'nombre',
            }
        }
        const state = pokemonesReducers(initState, action)
        expect(state).toEqual({
            pokemones: state.pokemones.filter(p => p.nombre !== action.payload)
        })
    })

    test('estado por defecto', () => {
        const initState = {
            pokemones: []
        }
        const action = {
            type: typesPokemon.OtroType,
        }
        const state = pokemonesReducers(initState, action)
        expect(state).toEqual(initState)
    })
})
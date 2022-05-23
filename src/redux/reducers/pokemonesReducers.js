import { typesPokemon } from "../types/typesPokemon"

const initialState = {
    pokemones: []
}

export const pokemonesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPokemon.add:
            return {
                pokemones: [action.payload]
            }

        case typesPokemon.list:
            return {
                pokemones: [...action.payload]
            }

        case typesPokemon.delete:
            return {
                pokemones: state.movies.filter(p => p.nombre !== action.payload)
            }
        case typesPokemon.edit:
            return {
                ...state
            }
        case typesPokemon.search:
            return {
                pokemones: action.payload
            }
        default:
            return state
    }
}
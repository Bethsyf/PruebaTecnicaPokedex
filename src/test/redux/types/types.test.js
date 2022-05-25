import '@testing-library/jest-dom'
import { typesLogin } from '../../../redux/types/typesLogin'
import { typesPokemon } from '../../../redux/types/typesPokemon'

describe('Verificar types', () => {
    test('Comparar el objeto de los types con el archivo typesLogin', () => {
        expect(typesLogin).toEqual({
            login: 'login',
            register: 'register',
            logout: 'logout'
        })
    })
    test('Comparar el objeto de los types con el archivo typesPokemon', () => {
        expect(typesPokemon).toEqual({
            add: 'add',
            list: 'list',
            delete: 'delete',
            edit: 'edit',
            search: 'search'
        })
    })
})
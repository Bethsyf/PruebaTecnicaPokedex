import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"
import { typesPokemon } from "../types/typesPokemon"

export const addPokemonAsync = (pokemon) => {
    return (dispath) => {
           
        addDoc(collection(DB, "PokemonesDB"), pokemon)
            .then(resp => {
                dispath(addPokemonSync(pokemon))
                dispath(listPokemonesSync())

            })
            .catch(error => {
                console.warn(error)
            })

    }
}

export const addPokemonSync = (pokemon) => {
    return {
        type: typesPokemon.add,
        payload: pokemon
    }
}



export const listPokemonesAsync = () => {
    return async (dispath) => {
        const collectionListar = await getDocs(collection(DB, "PokemonesDB"))
        console.log(collectionListar)
        const pokemones = []
        collectionListar.forEach(lista => {
            pokemones.push({
                ...lista.data()
            })
        })
        dispath(listPokemonesSync(pokemones))

    }

}

export const listPokemonesSync = (pokemon) => {
    return {
        type: typesPokemon.list,
        payload: pokemon
    }
}



export const deletPokemonAsync = (nombre) => {
    return async (dispatch) => {
        const collectionListar = collection(DB, "PokemonesDB")
        const q = query(collectionListar, where('nombre', '==', nombre))
        const datosQ = await getDocs(q)
        console.log(datosQ)
        datosQ.forEach(docu => {
            deleteDoc(doc(DB, 'PokemonesDB', docu.id))
            
        })
        dispatch(deletPokemonSync(nombre))
        dispatch(listPokemonesAsync())                 
    }

}

export const deletPokemonSync = (nombre) => {
    return {
        type: typesPokemon.delete,
        payload: nombre
    }

}


export const editPokemonAsync = (nombre, pokemon) => {
    return async (dispatch)=> {
        const collectionListar = collection(DB, "PokemonesDB")
        const q = query(collectionListar, where('nombre', '==', nombre))
        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async(docu)=>{
            id= docu.id
        })
        console.log(id)

        const docRef = doc(DB, "PokemonesDB", id)

        await updateDoc(docRef, pokemon)

        .then(resp =>{ 
            dispatch(editPokemonSync(pokemon))
            console.log(resp)
        })
        .catch(error => console.warn(error))

        dispatch(listPokemonesAsync())

    }
}

export const editPokemonSync = (pokemon) => {
    return{
        type: typesPokemon.edit,
        payload: pokemon

    }
}


export const searchPokemonAsync = (nombreBuscar)=>{
    return async (dispatch)=>{
        const collectionListar = collection(DB, "PokemonesDB")
        const q = query(collectionListar, where('nombre', '>=', nombreBuscar), where('nombre', '<=', nombreBuscar + '~'))
        const datosQ = await getDocs(q)

        const Pokemon =[]
        datosQ.forEach((docu =>{
            Pokemon.push(docu.data())
        }))
        dispatch(searchPokemonSync(Pokemon))
    }
}

export const searchPokemonSync = (pokemon)=>{
    return{
        type: typesPokemon.search,
        payload: pokemon
    }

}
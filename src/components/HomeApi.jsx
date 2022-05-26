import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { url } from '../helpers/url'
import Footer from './Footer'

const HomeApi = () => {
  const [pokeArray, setPokeArray] = useState([]);
  const getData = async (url) => {
    axios.get(url)
      .then(resp => {
        for (let i = 0; i < resp.data.results.length; i++) {
          setPokeArray([])
          axios.get(resp.data.results[i].url)
            .then(result => {
              setPokeArray(pokeArray => [...pokeArray, result.data])
            })
        }
      })
  }

  const showDetail = (detailPokemon) => {
    localStorage.setItem('detailPokemon', JSON.stringify(detailPokemon))
    console.log(detailPokemon)
  }

  useEffect(() => {
    getData(url);
  }, [])

  return (
    <>
      <div className="bg-transparent">
        <div className="row m-3" >
          {
            pokeArray?.map((pokemon, index) => (
              <Card className="col-sm-auto m-3 pokemon" key={index} style={{ width: '14rem' }} >
                <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
                <Card.ImgOverlay className="">
                  <div className="d-flex justify-content-end">
                    <Card.Title className="text-warning" >#{pokemon.id}</Card.Title>
                  </div>
                </Card.ImgOverlay>
                <div className="description">
                  <Card.Title className="text-danger" >{pokemon.name}</Card.Title>
                  <Card.Text className="text-danger mb-5" >Tipos: {pokemon.types[0].type.name} / {pokemon.types[1] ? pokemon.types[1].type.name : null} </Card.Text>
                  <div><Button className="card-button" href={`/detail/${pokemon.name}`} onClick={() => showDetail(pokemon)}>Ver más... detalles</Button></div>
                </div>
              </Card>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeApi
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { url } from '../helpers/url'


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
useEffect(() => {
  getData(url);
}, [url])


  return (
    <>
    <div className="bg-transparent">
      <div className="row m-3" >
      {
  pokeArray?.map((pokemon, index) => (  
  
            <Card className="col-sm-auto m-3 pokemon" key={index}  style={{ width: '14rem' }} >
              <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
              <Card.ImgOverlay className="">
                <div className="d-flex justify-content-end">
                  <Card.Title className="text-warning" >#{pokemon.id}</Card.Title>                                    
                </div>                
              </Card.ImgOverlay>
              <div className="description">
                <Card.Title className="text-danger" >{pokemon.name}</Card.Title>
                <Card.Text className="text-danger mb-5" >Tipo: {pokemon.types[0].type.name} </Card.Text>
                <div><Button className="card-button" href={`/detail/${pokemon.name}`}>Ver más... detalles</Button></div>
              </div>
            </Card>
            
            ))
          
  }    
        
      </div>
      
    </div>
    </>
    
  )
  
}

export default HomeApi
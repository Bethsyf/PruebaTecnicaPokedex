import React, { useEffect, useState } from 'react'
import { Card, CardGroup, ListGroup } from 'react-bootstrap'

const Detail = (numero) => {
    const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  const [ pokemon, setPokemon ] = useState(null)
  
  // Inicamos con ID random para siempre tener un pokemón
  const [ pokemonID, setPokemonId ] = useState(numero)

  // Solamente esta cargando mientras hacemos la petición,
  // cuando esta se resuelve o fue un éxito u un error.
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(res => res.json())
      .then(data => {
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })
  }, [])
// Pokedex.js

return (
      <>
<div className="">   
    <div className="d-flex justify-content-center">
        <Card className="col-sm-auto m-3"  style={{ width: '14rem' }} >
            <Card.Title className="text-warning" >#1</Card.Title>
              <Card.Img variant="top" src={pokemon.sprites.front_default} />
              <Card.Title className="text-warning" >{pokemon.name}</Card.Title>              
            </Card>
            <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Altura: </ListGroup.Item>
    <ListGroup.Item>Peso: </ListGroup.Item>
    <ListGroup.Item>Habilidades:</ListGroup.Item>
    <ListGroup.Item>Tipo:</ListGroup.Item>
  </ListGroup>
</Card>
    </div>
    <div className="m-5">
    <Card.Title className="text-warning" >Imagenes del Pokemon</Card.Title>
    <CardGroup >
  <Card>
    <Card.Img variant="top" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653261157/urntbgstiaund9xgey0i.webp' />
    <Card.Body>
      <Card.Title>left</Card.Title>      
    </Card.Body>    
  </Card>
  <Card>
    <Card.Img variant="top" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653261157/urntbgstiaund9xgey0i.webp' />
    <Card.Body>
      <Card.Title>back</Card.Title>      
    </Card.Body>    
  </Card>
  <Card>
    <Card.Img variant="top" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653261157/urntbgstiaund9xgey0i.webp' />
    <Card.Body>
      <Card.Title>rigth</Card.Title>      
    </Card.Body>    
  </Card>
</CardGroup>
    </div>
    <div className="m-5">
    <Card.Title className="text-warning" >Evoluciones</Card.Title>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653261157/urntbgstiaund9xgey0i.webp' />
    <Card.Body>
      <Card.Title>Pikachu1</Card.Title>      
    </Card.Body>    
  </Card>
  <Card>
    <Card.Img variant="top" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653261157/urntbgstiaund9xgey0i.webp' />
    <Card.Body>
      <Card.Title>Pikachu2</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653261157/urntbgstiaund9xgey0i.webp' />
    <Card.Body>
      <Card.Title>Pikachu3</Card.Title>
    </Card.Body>
  </Card>
</CardGroup>
    </div>
    </div>   
    </>
  )
}

export default Detail
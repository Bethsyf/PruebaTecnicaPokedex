import React, { useEffect, useState } from 'react'
import { Card, CardGroup, ListGroup } from 'react-bootstrap'

const Detail = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const detailPokemon = [JSON.parse(localStorage.getItem('detailPokemon'))];
    setDetail(detailPokemon);
  }, [])
  return (
    <>
      <div className="">
        {
          detail?.map((pokemon, index) => (
            <div>
              <div className="d-flex justify-content-center">
                <Card className="col-sm-auto m-3" key={index} style={{ width: '18rem' }} >
                  <Card.Title className="text-warning" >#{pokemon.id}</Card.Title>
                  <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
                  <Card.Title className="text-warning" >{pokemon.name}</Card.Title>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Tipos: {pokemon.types[0].type.name} / {pokemon.types[1] ? pokemon.types[1].type.name : null}</ListGroup.Item>
                    <ListGroup.Item>Habilidades: {pokemon.abilities[0].ability.name} / {pokemon.abilities[1] ? pokemon.abilities[1].ability.name : null}</ListGroup.Item>
                    <ListGroup.Item>Principales movimientos: {pokemon.moves[0].move.name} - {pokemon.moves[1] ? pokemon.moves[1].move.name : null} - {pokemon.moves[2] ? pokemon.moves[2].move.name : null} - {pokemon.moves[3] ? pokemon.moves[3].move.name : null}</ListGroup.Item>
                    <ListGroup.Item>Experiencia base: {pokemon.base_experience}</ListGroup.Item>
                    <ListGroup.Item>Altura: {(pokemon.height) / 10} m.</ListGroup.Item>
                    <ListGroup.Item>Peso: {(pokemon.weight) / 10} kg.</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
              <div className="m-5">
                <Card.Title className="text-warning" >Imagenes del Pokemon</Card.Title>
                <CardGroup >
                  <Card>
                    <Card.Img variant="top" src={pokemon.sprites.other.home.front_default} />
                    <Card.Body>
                      <Card.Title>Color 1</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={pokemon.sprites.other.home.front_shiny} />
                    <Card.Body>
                      <Card.Title>Color 2</Card.Title>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Detail
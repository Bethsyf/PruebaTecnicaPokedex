import React, { useEffect, useState } from 'react'
import { Card, CardGroup, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const detailPokemon = [JSON.parse(localStorage.getItem('detailPokemon'))];
    setDetail(detailPokemon);
  }, [])
  return (
    <>
      <div >
        {
          detail?.map((pokemon, index) => (
            <div>

              <div className="d-flex justify-content-center">
                <button className="btn btn-light"
                  onClick={() => navigate("/")}><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653506482/n2hqbpwjl7imynt0ro1s.jpg' alt='back' style={{ width: '150px' }} />
                </button>
                <Card className="col-sm-auto m-3 pokemon" key={index} style={{ width: '18rem' }} >
                  <Card.Title className="text-warning m-1" >#{pokemon.id}</Card.Title>
                  <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
                  <Card.Title className="text-warning m-2" >{pokemon.name}</Card.Title>
                </Card>
                <Card className="col-sm-auto m-3 pokemon" style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-warning text-danger mt-5">Tipos: {pokemon.types[0].type.name} / {pokemon.types[1] ? pokemon.types[1].type.name : null}</ListGroup.Item>
                    <ListGroup.Item className="bg-warning text-danger">Habilidades: {pokemon.abilities[0].ability.name} / {pokemon.abilities[1] ? pokemon.abilities[1].ability.name : null}</ListGroup.Item>
                    <ListGroup.Item className="bg-warning text-danger">Principales movimientos: {pokemon.moves[0].move.name} - {pokemon.moves[1] ? pokemon.moves[1].move.name : null} - {pokemon.moves[2] ? pokemon.moves[2].move.name : null} - {pokemon.moves[3] ? pokemon.moves[3].move.name : null}</ListGroup.Item>
                    <ListGroup.Item className="bg-warning text-danger">Experiencia base: {pokemon.base_experience}</ListGroup.Item>
                    <ListGroup.Item className="bg-warning text-danger">Altura: {(pokemon.height) / 10} m.</ListGroup.Item>
                    <ListGroup.Item className="bg-warning text-danger">Peso: {(pokemon.weight) / 10} kg.</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
              <div className="m-5">
                <Card.Title className="mx-5 text-danger" >Imagenes del Pokemon</Card.Title>
                <CardGroup >
                  <Card className="col-sm-auto m-3 pokemon">
                    <Card.Img variant="top" src={pokemon.sprites.other.home.front_default} />
                    <Card.Body>
                      <Card.Title className="text-warning">Color 1</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card className="col-sm-auto m-3 pokemon">
                    <Card.Img variant="top" src={pokemon.sprites.other.home.front_shiny} />
                    <Card.Body>
                      <Card.Title className="text-warning">Color 2</Card.Title>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default Detail
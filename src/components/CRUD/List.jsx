import React, { useEffect, useState } from 'react'
import { Button, Card, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deletPokemonAsync, listPokemonesAsync } from '../../redux/actions/actionPokemones';
import '../../styles/styles.css'
import Edit from './Edit';

const List = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState([]);

  const { pokemones } = useSelector(store => store.pokemonesStore)
  console.log(pokemones)

  useEffect(() => {
    dispatch(listPokemonesAsync());
  }, [dispatch])

  const editar = (pokemon) => {
    setModal(true)
    setDatos(pokemon)
}


  return (
    <div className="bg-transparent">
      <div className="row m-3" >
        {
          pokemones.map((p, index) => (
            <Card className="col-sm-auto m-3 pokemon" id={p.numero} key={index+1} style={{ width: '14rem' }} >
              <Card.Img variant="top" src={p.foto} />
              <Card.ImgOverlay className="">
                <div className="d-flex justify-content-between">
                  <Card.Title className="text-warning" >#{p.numero}</Card.Title>
                  <Card.Title className="text-warning" >{p.nombre} </Card.Title>
                  <Nav.Link className="d-flex justify-content-end" onClick={() => dispatch(deletPokemonAsync(p.nombre))}><i className='fa fa-trash yellow-color px-1'></i></Nav.Link>
                </div>
                <Nav.Link className="d-flex justify-content-end " onClick={() => editar(p)}><i className="fas fa-edit yellow-color"></i></Nav.Link>
              </Card.ImgOverlay>
              <div className="description">
                <Card.Text className="text-danger" >Tipo: {p.tipo1} / {p.tipo2}</Card.Text>
                <Card.Text className="text-danger mb-3" >Evolución de: {p.evolucion}</Card.Text>                
              </div>
            </Card>
          ))
        }
      </div>
      {
                modal === true ? <Edit datos={datos} setModal={setModal} /> : ''
            }
    </div>
  )
}

export default List
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { listPokemonesAsync } from '../../redux/actions/actionPokemones';
import '../../styles/styles.css'

const List = () => {
  const dispatch = useDispatch()   
    
    const { pokemones } = useSelector(store => store.pokemonesStore)
    console.log(pokemones)

    useEffect(() => {
        dispatch(listPokemonesAsync());
    }, [dispatch])

    
  return (
    <div className="bg-transparent">
            <div className="row m-3" >
                {
                    pokemones.map((p, index) => (
    <Card className="col-sm-auto m-3 bg-warning pokemon" key={index} style={{ width: '14rem', border: '1px solid #C00' }} >
      <Card.Img variant="top" src={p.foto} />
      <Card.ImgOverlay>
        <Card.Title className="text-danger" >#{p.numero}</Card.Title>
      </Card.ImgOverlay>
      <ListGroup className="list-group-flush m-2 descripcion">
        <ListGroupItem className=" bg-primary text-warning">Nombre: {p.nombre}</ListGroupItem>
        <ListGroupItem className=" bg-primary text-warning">Tipo: {p.tipo1} {p.tipo2}</ListGroupItem>
        <ListGroupItem className=" bg-primary text-warning">Evolución de: {p.evolucion}</ListGroupItem>
        <ListGroupItem className=" bg-primary" ><Card.Link className="text-warning" href="#">Ver más detalles</Card.Link></ListGroupItem>
      </ListGroup>      
    </Card>
    ))
  }
</div>

</div>
  )
}

export default List
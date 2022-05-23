import React, { useEffect } from 'react'
import { Card, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deletPokemonAsync, listPokemonesAsync } from '../../redux/actions/actionPokemones';
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
    <Card className="col-sm-auto m-3 pokemon" key={index} style={{ width: '14rem', border: '1px solid #C00' }} >
      <Card.Img variant="top" src={p.foto} />
      <Card.ImgOverlay className="">
        <div className="d-flex justify-content-between"><Card.Title className="text-warning" >#{p.numero}</Card.Title>        
        <Card.Title className="text-warning" ><span>{p.nombre}</span> </Card.Title></div>
        <Nav.Link className="d-flex justify-content-end" onClick={() => dispatch(deletPokemonAsync(p.nombre))}><i className='fa fa-trash yellow-color'></i></Nav.Link> 
        <Nav.Link className="d-flex justify-content-end" ><i className="fas fa-edit yellow-color"></i></Nav.Link>
        </Card.ImgOverlay> 
        <div className="d-inline align-text-bottom description"><Card.Text className="text-warning" >Tipo: {p.tipo1} {p.tipo2}</Card.Text>        
        <Card.Text className="text-warning" ><span>Evolución de: {p.evolucion}</span> </Card.Text></div>
        
      <Card.Link className="text-warning" href="#">Ver más detalles</Card.Link>
    </Card>
    ))
  }
</div>

</div>
  )
}

export default List
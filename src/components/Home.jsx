import React from 'react'
import { Button, Card, Nav } from 'react-bootstrap'


const Home = () => {
  


  return (
    <div className="bg-transparent">
      <div className="row m-3" >
        
            <Card className="col-sm-auto m-3 pokemon"  style={{ width: '14rem' }} >
              <Card.Img variant="top" src='{p.foto}' />
              <Card.ImgOverlay className="">
                <div className="d-flex justify-content-between">
                  <Card.Title className="text-warning" >#</Card.Title>
                  <Card.Title className="text-warning" >npmbre </Card.Title>                  
                </div>                
              </Card.ImgOverlay>
              <div className="description">
                <Card.Text className="text-danger" >Tipo: </Card.Text>
                <Card.Text className="text-danger mb-5" >Evolución de: </Card.Text>
                <div><Button className="card-button" href={`/detail`}>Ver más... detalles</Button></div>
              </div>
            </Card>
          
        
      </div>
      
    </div>
  )
  
}

export default Home
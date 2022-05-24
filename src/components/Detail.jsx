import React from 'react'
import { Card, CardGroup, ListGroup } from 'react-bootstrap'

const Detail = () => {

  return (
    <>
      <div className="">
        <div className="d-flex justify-content-center">
          <Card className="col-sm-auto m-3" style={{ width: '14rem' }} >
            <Card.Title className="text-warning" >#</Card.Title>
            <Card.Img variant="top" src='imagen' />
            <Card.Title className="text-warning" >nombre</Card.Title>
          </Card>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Altura: </ListGroup.Item>
              <ListGroup.Item>Peso: </ListGroup.Item>
              <ListGroup.Item>Habilidades:</ListGroup.Item>
              <ListGroup.Item>Tipo: </ListGroup.Item>
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
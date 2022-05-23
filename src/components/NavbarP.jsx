import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from './CRUD/Search'

const NavbarP = () => {
  return (
    <>
  <Navbar bg="light" expand="lg">
  <Container fluid >
    <Navbar.Brand href="/"><img  src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653327695/o3mt4pt8xdytmvrwddt5.png' alt='logo' style={{ maxHeight: '100px' }}/></Navbar.Brand>
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse className="d-flex justify-content-around">      
    <Button href='/add' variant="primary">Agregar Pokemon</Button>
    <Search />       
    </Navbar.Collapse>
    <Button href='/login' variant="danger">Cerrar Sesión</Button>
  </Container>
</Navbar>
</>
  )
}

export default NavbarP
import React from 'react'
import { Button, Container, Form, FormControl, Navbar} from 'react-bootstrap'

const NavbarP = () => {
  return (
    <>
  <Navbar bg="light" expand="lg">
  <Container fluid >
    <Navbar.Brand href="/"><img  src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653249758/zoviddgxwjdb3juexlca.png' alt='logo' style={{ maxHeight: '100px' }}/></Navbar.Brand>
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse className="d-flex justify-content-around">      
    <Button href='/add' variant="primary">Agregar Pokemon</Button>
      <Form  className="d-flex">
        <FormControl 
          type="search"
          placeholder="Buscar Pokemon por nombre"
          className="me-1 "
          aria-label="Search"
        />
        <Button variant="warning">Buscar</Button>        
      </Form>        
    </Navbar.Collapse>
    <Button href='/login' variant="danger">Cerrar Sesión</Button>
  </Container>
</Navbar>
</>
  )
}

export default NavbarP
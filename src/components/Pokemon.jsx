import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import List from './CRUD-Firestore/List'
import Search from './CRUD-Firestore/Search'
import Footer from './Footer'



const Pokemon = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid >
          <Navbar.Collapse className="d-flex justify-content-around">
            <Button href='/add' variant="primary border-warning">Agregar Pokemon</Button>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <List />
      <Footer/>
    </>
  )
}

export default Pokemon
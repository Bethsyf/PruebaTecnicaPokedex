import React from 'react'
import { Button, Container,  Navbar} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/actionLogin'
import Search from './CRUD/Search'

const NavbarP = () => {
  const dispatch = useDispatch()
  return (
    <>
  <Navbar bg="light" expand="lg">
  <Container fluid >
    <Navbar.Brand href="/"><img  src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653327695/o3mt4pt8xdytmvrwddt5.png' alt='logo' style={{ maxHeight: '100px' }}/></Navbar.Brand>
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse className="d-flex justify-content-around">
    <Button href='/' variant="warning border-primary">Pokemones - PokeApi</Button>
    <Button href='/poke' variant="warning border-danger">Pokemones - Firestore</Button>      
    <Button href='/add' variant="primary border-warning">Agregar Pokemon</Button>
    <Search />       
    </Navbar.Collapse>
    <Button href='/login' variant="danger" onClick={()=>dispatch(logoutAsync()) }>Cerrar Sesión</Button>
  </Container>
</Navbar>
</>
  )
}

export default NavbarP
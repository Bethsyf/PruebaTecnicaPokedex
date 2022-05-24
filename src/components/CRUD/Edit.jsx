import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { editPokemonAsync } from '../../redux/actions/actionPokemones';

const Edit = ({ datos, setModal }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [formValue, handleInputChange] = useForm({
        nombre: datos.nombre,
        tipo1: datos.tipo1,
        tipo2: datos.tipo2,
        numero: datos.numero,
        evolucion: datos.evolucion
    })

    const { nombre, tipo1, tipo2, numero, evolucion } = formValue

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
        dispatch(editPokemonAsync(nombre, formValue))
        handleClose()
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-warning' closeButton>
                    <Modal.Title className='text-primary'>Editar Pokemon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='m-5 px-3 bg-light' onSubmit={handleSubmit} margin={50}>
                        <Form.Group >
                            <Form.Label className='mx-1 text-primary'>Número</Form.Label>
                            <Form.Control className='mb-2 mx-1 border-warning' type="text" name="numero" placeholder="Agrega numero" value={numero} onChange={handleInputChange} />

                            <Form.Label className='mx-1 text-primary'>Nombre</Form.Label>
                            <Form.Control className='mb-2 mx-1 border-warning' type="text" name="nombre" placeholder="Agrega nombre" value={nombre} onChange={handleInputChange} />

                            <Form.Label className='mx-1 text-primary'>Tipo1</Form.Label>
                            <Form.Control className='mb-2 mx-1 border-warning' type="text" name="tipo1" placeholder="Agrega tipo 1 de pokemon" value={tipo1} onChange={handleInputChange} />

                            <Form.Label className='mx-1 text-primary'>Tipo2</Form.Label>
                            <Form.Control className='mb-2 mx-1 border-warning' type="text" name="tipo2" placeholder="Agrega tipo 2 de pokemon" value={tipo2} onChange={handleInputChange} />

                            <Form.Label className='mx-1 text-primary' >Evolución</Form.Label>
                            <Form.Control className='mb-2 mx-1 border-warning' type="text" name="evolucion" placeholder="Agrega nombre del pokemon que proviene" value={evolucion} onChange={handleInputChange} />
                        </Form.Group>
                        <Button className='m-3 btn btn-warning' type="submit">
                            Editar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Edit
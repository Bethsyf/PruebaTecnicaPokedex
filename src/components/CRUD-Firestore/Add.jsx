import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FileUpload } from '../../helpers/Fileupload';
import { useForm } from '../../hooks/useForm';
import { addPokemonAsync } from '../../redux/actions/actionPokemones';

const Add = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [formValue, handleInputChange, rest] = useForm({
        nombre: '',
        foto: '',
        tipo1: '',
        tipo2: '',
        numero: '',
        evolucion: ''
    })

    const { nombre, tipo1, tipo2, numero, evolucion } = formValue
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(addPokemonAsync(formValue))
        rest()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        FileUpload(file)
            .then(resp => {
                formValue.foto = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })
    }
    
    return (
        <div >
            <Form className='bg-light mx-auto' onSubmit={handleSubmit} style={{ width: '600px' }}>
                <h1 className='p-3 text-primary bg-warning'>Agregar Pokemón
                <img className="mx-4" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653164820/izctxtxey7bfiym2tzbc.png' alt='logo' style={{ maxHeight: '50px' }} />
                <button className="btn btn-light mx-4"
                        onClick={() => navigate("/poke")}><i className='fa fa-times text-primary ' /><i />
                    </button>
                </h1>
                <Form.Group >
                    <Form.Label className='m-1 text-primary'>Número</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="numero" placeholder="Agrega numero" value={numero} onChange={handleInputChange} />

                    <Form.Label className='mx-1 text-primary' >Nombre del Pokemón</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="nombre" placeholder="Agrega el nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label className='mx-1 text-primary'>Tipo1</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="tipo1" placeholder="Agrega tipo de pokemon" value={tipo1} onChange={handleInputChange} />

                    <Form.Label className='mx-1 text-primary'>Tipo2</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="tipo2" placeholder="Agrega tipo de pokemon" value={tipo2} onChange={handleInputChange} />

                    <Form.Label className='mx-1 text-primary' >Evolución</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="evolucion" placeholder="Agrega nombre del pokemon que proviene" value={evolucion} onChange={handleInputChange} />

                    <Form.Label className='m-1 text-primary'>Imagen</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="file" name="foto" placeholder="Ingrese Imagen.jpg" onChange={handleFileChange} />
                </Form.Group>
                <Button className='m-3 btn btn-warning' type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    )
}

export default Add
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FileUpload } from '../../helpers/Fileupload';
import { useForm } from '../../hooks/useForm';
import { addPokemonAsync } from '../../redux/actions/actionPokemones';

const Add = () => {
  const dispatch = useDispatch();

    const [formValue, handleInputChange, rest]= useForm({
        nombre: '',
        foto: '',
        tipo1: '',
        tipo2: '',
        numero:'',
        evolucion: ''   
    })

    const {nombre, tipo1, tipo2, numero, evolucion}=formValue
     const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formValue)
        dispatch(addPokemonAsync(formValue))
        rest()
    }

    const handleFileChange =(e)=>{
        const file= e.target.files[0]       
        FileUpload(file)
        .then(resp =>{
            formValue.foto =resp
            console.log(resp)
        })
        .catch(error =>{
            console.warn(error)
        })
    
    }
    return (
        <div >
             <Form className='m-5 px-3 bg-light' onSubmit={handleSubmit} margin={50}>
                 <h1 className='p-3 text-primary'>Agregar Pokemon</h1>
                <Form.Group controlId="formBasicEmail">

                    <Form.Label className='m-1'>Numero</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="numero" placeholder="Agrega numero" value={numero} onChange={handleInputChange} />

                    <Form.Label className='mx-1' >Nombre del Pokemon</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="nombre" placeholder="Agrega el nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label className='mx-1'>Tipo1</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="tipo1" placeholder="Agrega tipo de pokemon" value={tipo1} onChange={handleInputChange} />

                    <Form.Label className='mx-1'>Tipo2</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="tipo2" placeholder="Agrega tipo de pokemon" value={tipo2} onChange={handleInputChange} />

                    <Form.Label className='mx-1' >Evolucion</Form.Label>
                    <Form.Control className='mb-2 mx-1 border-warning' type="text" name="evolucion" placeholder="Agrega nombre del pokemon que proviene" value={evolucion} onChange={handleInputChange} />

                    <Form.Label className='m-1'>Imagen</Form.Label>
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
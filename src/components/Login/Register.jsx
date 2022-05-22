import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { registerAsync } from '../../redux/actions/actionRegister'

const Register = () => {
  const dispatch = useDispatch()

  const  [formValue, handleInputChange, rest]=  useForm({
      nombre:'',
      apellido:'',
      email: '',
      pass: '',
      conpass: ''      
  })

  const {nombre, apellido, email, password, conpassword} = formValue

  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(formValue)
      dispatch(registerAsync(email, password, nombre,apellido))
      rest()
  }
  
  return (
    <>
      <div style={{
        backgroundImage: `url('https://res.cloudinary.com/dmaviub4l/image/upload/v1653168442/iltahsjrczfh6eqlgshv.jpg')`,
        height: `100vh`
      }}>
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className="card p-4 bg-primary bg-opacity-75">
            <div className="card-header d-flex align-middle">
              <h3 className="text-warning mt-2 mx-auto">Registro </h3>
              <img className="justify-content-center align-items-center mx-4" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653164820/izctxtxey7bfiym2tzbc.png' alt='pokebola' style={{ width: `8vh` }} />
            </div>
            <div className="card-body w-200">
              <form onSubmit={handleSubmit} >
                <div className="input-group form-group mt-3">
                  <label for='nombre' className="text-warning">Nombre<input type="text" className="form-control" placeholder="Nombre" required
                    name="nombre" id='nombre' value={nombre} onChange={handleInputChange} /></label>
                  
                </div>
                <div className="input-group form-group mt-3">
                  <label  for='apellido'className="text-warning">Apellido<input type="text" className="form-control" placeholder="Apellido" required
                    name="apellido" id='apellido' value={apellido} onChange={handleInputChange}/></label>
                </div>
                <div className="input-group form-group mt-3">
                  <label for='email' className="text-warning">Correo<input type="email" className="form-control" placeholder="usuario@gmail.com" required
                    name="email" id='email' value={email} onChange={handleInputChange}/></label>
                </div>                
                <div className="input-group form-group mt-3">
                  <label for='password' className="text-warning">Contraseña<input type="password" className="form-control" placeholder="123" required
                    name="password" id='password' value={password} onChange={handleInputChange}/></label>
                </div>
                <div className="input-group form-group mt-3">
                  <label for='conpassword' className="text-warning">Confirmar Contraseña<input type="password" className="form-control" placeholder="Repita contraseña" required
                    name="conpassword" id='conpassword' value={conpassword} onChange={handleInputChange}/></label>
                </div>
                <div className="form-group mt-5">
                  <input type="submit" value="Registrarse"
                    className="btn bg-warning float-end w-100"
                    name="login-btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
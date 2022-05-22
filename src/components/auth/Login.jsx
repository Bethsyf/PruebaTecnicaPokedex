import React from 'react'
import { Nav, NavLink } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { loginAsync, loginFacebook, loginGoogle } from '../../redux/actions/actionLogin'

const Login = () => {
  const dispatch = useDispatch()

    const [formValue, handleInputChange, rest] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)        
        dispatch(loginAsync(email, password))
        rest()
        
    }
    return (
        <>
            <div id="template-bg-1" class="bg-image" style={{backgroundImage: `url('https://res.cloudinary.com/dmaviub4l/image/upload/v1653168442/iltahsjrczfh6eqlgshv.jpg')`,
            height: `100vh`}}>
                <div
                    class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div class="card p-4 bg-primary bg-opacity-75">
                        <div class="card-header d-flex align-middle">
                            <h3 class="text-warning mt-2 mx-auto">Iniciar sesión </h3>
                            <img class="justify-content-center align-items-center mx-4" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653164820/izctxtxey7bfiym2tzbc.png' alt='pokebola' style={{width: `8vh`}}/>
                        </div>
                        <div class="card-body w-100">
                            <form name="login" action="" method="post" onSubmit={handleSubmit}>
                                <div class="input-group form-group mt-3">
                                    <div class="bg-warning rounded-start">
                                        <span class="m-3"><i class="fas fa-user mt-2"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Email"
                                        name="email" value={email} onChange={handleInputChange}/>
                                </div>
                                <div class="input-group form-group mt-3">
                                    <div class="bg-warning rounded-start">
                                        <span class="m-3"><i class="fas fa-key mt-2"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Contraseña" required
                                        name="password" value={password}
                                        onChange={handleInputChange}/>
                                </div>

                                <div class="form-group mt-3">
                                    <input type="submit" value="Acceder"
                                        class="btn bg-warning float-end w-100"
                                        name="login-btn" required/>
                                </div>
                            </form>  
                            <div class="mt-5 card-footer">
                            <hr class="my-4"></hr>
                            <button class="btn btn-block btn-primary w-100 my-2" style={{backgroundColor: `#dd4b39`}}
                            type="submit"><i class="fab fa-google me-2" onClick={() => dispatch(loginGoogle())}></i> Loguearse con Google</button>
                            <button class="btn btn-block btn-primary w-100" style={{backgroundColor: `#3b5998`}}
                            type="submit"><i class="fab fa-facebook-f me-2" onClick={() => dispatch(loginFacebook())}></i>Loguearse con Facebook</button>

                            </div>                          
                        </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center">
              <NavLink className="text-warning" to="/register">Registrarse</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
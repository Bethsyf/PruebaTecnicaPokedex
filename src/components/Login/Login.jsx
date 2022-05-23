import React from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { loginAsync, loginFacebook, loginGoogle } from '../../redux/actions/actionLogin'
import { useForm } from '../../hooks/useForm'

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
            <div id="template-bg-1" className="bg-image" style={{backgroundImage: `url('https://res.cloudinary.com/dmaviub4l/image/upload/v1653168442/iltahsjrczfh6eqlgshv.jpg')`,
            height: `100vh`}}>
                <div
                    className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card p-4 bg-primary bg-opacity-75">
                        <div className="card-header d-flex align-middle">
                            <h3 className="text-warning mt-2 mx-auto">Iniciar sesión </h3>
                            <img className="justify-content-center align-items-center mx-4" src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653164820/izctxtxey7bfiym2tzbc.png' alt='pokebola' style={{width: `8vh`}}/>
                        </div>
                        <div className="card-body w-100">
                            <form name="login" action="" method="post" onSubmit={handleSubmit}>
                                <div className="input-group form-group mt-3">
                                    <div className="bg-warning rounded-start">
                                        <span className="m-3"><i className="fas fa-user mt-2"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Email"
                                        name="email" value={email} onChange={handleInputChange}/>
                                </div>
                                <div className="input-group form-group mt-3">
                                    <div className="bg-warning rounded-start">
                                        <span className="m-3"><i className="fas fa-key mt-2"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Contraseña" 
                                        name="password" value={password}
                                        onChange={handleInputChange}/>
                                </div>

                                <div className="form-group mt-3">
                                    <input type="submit" value="Acceder"
                                        className="btn bg-warning float-end w-100"
                                        name="login-btn" />
                                </div>
                                <div className="mt-5 card-footer">
                            <hr className="my-4"></hr>
                            <button className="btn btn-block btn-primary w-100 my-2" style={{backgroundColor: `#dd4b39`}}
                            type="submit"  onClick={() => dispatch(loginGoogle())}><i className="fab fa-google me-2"></i> Loguearse con Google</button>
                            <button className="btn btn-block btn-primary w-100" style={{backgroundColor: `#3b5998`}}
                            type="submit" onClick={() => dispatch(loginFacebook())}><i className="fab fa-facebook-f me-2" ></i>Loguearse con Facebook</button>

                            </div> 
                            </form></div>  
                                                     
                        
                        <div className="card-footer">
              <div className="d-flex justify-content-center">
              <Nav.Link className="text-warning" href="/register">Registrarse</Nav.Link>
              </div>
            </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Login
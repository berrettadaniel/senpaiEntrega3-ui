//login.html

import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { BannerSitio } from '../common/BannerSitio';
import { useState } from 'react';
import { api } from '../../api/api';

export function LoginPage() {
    //para el login de un usuario ya registrado
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //Se envia el formulario con usuario y password.
    //Por el momento se considera como nombre de usuario un email.
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setLoading(true); //estado de loading = true
        setError(""); //borro el error

        //Llamo a un POST con Axios a /login y mando la informacion del formulario en el estado actual (loading = true)
        api.post("/auth/login", {email: email, password: password}).then(
            (response) => {
                console.log(response);
                setLoading(false); //estado de loading = false (cambia en caso de exito)
            },
            (errorResponse) => {
                const response = errorResponse.response.data; //guardo la respuesta de error de la API
                setError(response.error); //y se cambia el estado para mostrarla
                setLoading(false); //estado de loading = false (tambien cambia en caso de error)
            }
        );
    };
    
    //Para manejar los cambios del formulario, o sea el estado
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };



    //para el register de un nuevo usuario
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [loadingReg, setLoadingReg] = useState(false);
    const [errorReg, setErrorReg] = useState("");

    //Se envia el formulario con usuario y password.
    //Por el momento se considera como nombre de usuario un email.
    const handleSignupSubmit = (event) => {
        event.preventDefault();
        setLoadingReg(true); //estado de loading = true
        setErrorReg(""); //borro el error

        //Llamo a un POST con Axios a /login y mando la informacion del formulario en el estado actual (loading = true)
        api.post("/auth/register", {email: email, password: password}).then(
            (response) => {
                console.log(response);
                setLoadingReg(false); //estado de loading = false (cambia en caso de exito)
            },
            (errorResponse) => {
                const response = errorResponse.response.data; //guardo la respuesta de error de la API
                setErrorReg(response.error); //y se cambia el estado para mostrarla
                setLoadingReg(false); //estado de loading = false (tambien cambia en caso de error)
            }
        );
    };
    
    //Para manejar los cambios del formulario, o sea el estado
    const handleEmailRegChange = (event) => {
        setEmailReg(event.target.value);
    };

    const handlePasswordRegChange = (event) => {
        setPasswordReg(event.target.value);
    };



    return (
        <>
            <Header titulo = "REFORMAS Y REPARACIONES"
                opcion1 = "Volver" opcion1link="/"
                opcion2 = "" opcion2link=""
                opcion3 = "" opcion3link="" />
            
            <div className="gridContainerLogin">

                {/* Parte izquierda del grid */}
                <BannerSitio />

                {/* Parte derecha superior del grid */}
                <form className="LoginUsuario" onSubmit={handleLoginSubmit}>
                    <h3>Si ya tiene usuario registrado,<br/>ingrese aquÍ</h3>
                    <br/>

                    <div>
                        <h2>Usuario</h2>
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            type="email"
                            name="User"
                            required
                        />
                    </div>

                    <div>
                        <h2>Contraseña</h2>
                        <input
                            value={password}
                            onChange={handlePasswordChange}
                            type="password"
                            name="Pswd"
                            required
                        />
                    </div>
                    <br/>

                    <button type="submit">
                        {loading ? "Cargando ..." : "Ingresar"}
                    </button>

                    <span className="text-danger d-block">{error !== null ? error : "Acceso a sistema"}</span>
                </form>

                {/* Parte derecha inferior del grid */}
                <form className="RegistrarUsuario" onSubmit={handleSignupSubmit}>
                    <h3>Si no tiene usuario registrado,<br/>regístrelo con su e-mail</h3>
                    <br/>

                    <div>
                        <h2>Usuario nuevo</h2>
                        <input
                            value={emailReg}
                            onChange={handleEmailRegChange}
                            type="emailReg"
                            name="UserReg"
                        />
                    </div>

                    <div>
                        <h2>Contraseña</h2>
                        <input
                            value={passwordReg}
                            onChange={handlePasswordRegChange}
                            type="password"
                            name="PswdReg"
                        />
                    </div>
                    <br/>
                    
                    <button type="submit">
                        {loadingReg ? "Registrando ..." : "Registrar"}
                    </button>

                    <span className="text-danger d-block">{errorReg}</span>
                </form>

                <Footer />
            
            </div>
        </>
    )
}
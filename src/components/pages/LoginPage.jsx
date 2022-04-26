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
    const handleSubmit = (event) => {
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
                <form className="LoginUsuario" onSubmit={handleSubmit}>
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

                    <span className="text-danger d-block">{error}</span>
                </form>

                {/* Parte derecha inferior del grid */}
                <form className="RegistrarUsuario">
                    <h3>Si no tiene usuario registrado,<br/>regístrelo con su e-mail</h3>
                    <br/>

                    <div>
                        <h2>Usuario nuevo</h2>
                        <input type="text" name="User"/>
                    </div>

                    <div>
                        <h2>Contraseña</h2>
                        <input type="text" name="Pswd"/>
                    </div>
                    <br/>
                    
                    <button>Registrar</button>
                </form>

                <Footer />
            
            </div>
        </>
    )
}
//login.html

import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { BannerSitio } from '../common/BannerSitio';

export function LoginPage() {
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
                <form className="LoginUsuario">
                    <h3>Si ya tiene usuario registrado,<br/>ingrese aquÍ</h3>
                    <br/>

                    <div>
                        <h2>Usuario</h2>
                        <input type="text" name="User" />
                    </div>

                    <div>
                        <h2>Contraseña</h2>
                        <input type="text" name="Pswd" />
                    </div>
                    <br/>

                    <button>Ingresar</button>
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
//Contacto.html

import { Header } from '../common/Header';
import { Footer } from '../common/Footer';

export function ContactoPage() {
    return (
        <>
            <Header titulo = "REFORMAS Y REPARACIONES"
                    opcion1="Volver" opcion1link="/"
                    opcion2="" opcion2link=""
                    opcion3="" opcion3link="" />

            <div class="gridContainerContact">

            {/* Parte izquierda supeior del grid container */}
            <div class="ImagenRellenoContact">
            </div>

            {/* Parte izquierda inferior del grid container */}
            {/* (explicar breve que puede solicitar o pedir en el formulario) */}
            <div class="GuiaBreveContact">
                <h3>Si se quiere registrar con un servicio que no encuentra,</h3>
                <h3>solicítelo por medio del formulario.</h3>
                <br/>
                <h3>Si tiene dudas sobre como acceder a los servicios,</h3>
                <h3>o cualquier inconveniente, sepa que siempre puede</h3>
                <h3>escribirnos por aqui</h3>
            </div>

            {/* Parte derecha del grid: formulario de e-mail */}
            <div class="FormContacto">

                <div>
                    <h3>Nombre:</h3>
                    <input type="text" name="Nombre" />
                </div>

                <div>
                    <h3>e-mail:</h3>
                    <input type="text" name="EMail" />
                </div>

                <div>
                    <h3>Teléfono:</h3>
                    <input type="text" name="Telefono" />
                </div>

                <div>
                    <h3>Mensaje:</h3>
                    <textarea class="TextoMensaje" name="Mensaje"></textarea>
                </div>

                <button>Enviar</button>

            </div>

            {/* Footer */}
            <Footer />
            </div>
        </>
    )
}
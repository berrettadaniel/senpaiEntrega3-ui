//ofrecemos.html

import { Header } from '../common/Header';
import { Footer } from '../common/Footer';

export function OfrecemosPage() {
return (
    <>
    <Header titulo = "QUE OFRECEMOS?"
            opcion1 = "Volver" opcion1link="/"
            opcion2 = "" opcion2link=""
            opcion3 = "" opcion3link="" />
    
    {/* Textos de presentacion */}
    <div class="gridContainerOffer">

        {/* Parte superior del body */}
        <main class="presentation">
            <h1>REPARAR Y DAR SOLUCION A TODO</h1>
            <div>
                <p>Le permite buscar el servicio adecuado para mantener su casa,</p>
                <p>su oficina, edificio, jardín o lo que sea, en las condiciones que</p>
                <p>Ud. siempre ha querido para su familia, sus empleados, etc.</p>
            </div>
        </main>

        {/* Parte inferior izquierda */}
        <div class="SearchService">
            <h2>BUSCAR EL SERVICIO</h2>
            <h2>QUE NECESITA</h2>
            <ul>
                <p>Entre una lista de oficios, como Sanitaria,</p>
                <p>Albañilería, Contrucción, etc., podrá buscar</p>
                <p>a la persona o empresa que necesite.</p>
                <p>Desde aquí quedarán en contacto.</p>
            </ul>
        </div>

        {/* Parte inferior derecha */}
        <div class="OfferJob">
            <h2>OFRECER SU SERVICIO</h2>
            <h2>U OFICIO</h2>
            <ul>
                <p>Si quiere ofrecer su servicio, lo puede hacer aquí.</p>
                <p>Debe registrarse con el servicio que tenga para brindar.</p>
                <p>Solo pedimos tres condiciones:</p>
                
                <p>Responsabilidad</p>
                <p>Compromiso</p>
                <p>Amabilidad con sus clientes</p>
            </ul>
        </div>

        <Footer />

    </div>

    </>
);
}
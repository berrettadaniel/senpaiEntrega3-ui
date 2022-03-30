//servicios.html

import { HeaderService } from './HeaderService';
import { Footer } from '../common/Footer';
import { useEffect, useState } from "react";
import { API_URL } from "../../api/api.js";
import { useParams } from 'react-router-dom';

export function ServicioPage() {
    //Para obtener el id del servicio que viene por la url (ver en App.jsx servicio/:id)
    //El id del servicio me permite obtener el nombre desde el DB.JSON y ese valor es
    //el que se pasa al parametro "opcion2" en el Header.

    const params = useParams();

    //Para el manejo de estados
    const [{servicio, transpHeaderImg}, setServicio] = useState("");

    //Efecto secundario - fetch con AXIOS
    useEffect(() =>{
        API_URL.get("/servicios").then((response) => {
            const indice = params.id;
            const servicios = response.data;
            const servicio = servicios[indice].nombre;
            const transpHeaderImg = servicios[indice].archivoTransp; // ----> imagen del header segun el servicio
            setServicio({servicio, transpHeaderImg});  //se cambia el estado para re-dibujar la pagina
        });
    }, []);

    return (
        <>
            <HeaderService titulo = "SEGUIMIENTO DE SERVICIOS"
                    opcion1 = "Volver" opcion1link="/"
                    opcion2 = {servicio} opcion2link=""
                    opcion3 = "Hola Daniel" opcion3link=""
                    imagenTransp = {transpHeaderImg}/>

            <div className="gridContainerService">

                <div className="menuServicios">
                    <p>Nuevo</p>
                    <p>En curso</p>
                    <p>Finalizadas</p>
                </div>

                <div>
                    <p>Empresa</p>
                    <p>telefono</p>
                    <p>e-mail</p>
                </div>

                {/* En el mismo cuadro del grid,
                        "1 formulario" para ingresar uno nuevo
                        "1 formulario" para ver un trabajo en curso (lista de fechas y descripciones)
                        "1 formulario" para ver las tareas finalizadas */}

                <div className="formulario">
                    <div className="nuevoForm"> {/* debe arrancar como display: none */}
                        <p>Nuevo trabajo</p>
                    </div>
                    
                    <div className="enCursoForm"> {/*} debe arrancar como display: none */}
                        <p>Trabajo en curso</p>
                    </div>

                    <div className="finForm"> {/* debe arrancar como display: none */}
                        <p>Finalizadas</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

//servicios.html

import { Header } from '../common/Header';
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
    const [servicios, setServicios] = useState([]);

    //Efecto secundario - fetch con AXIOS
    useEffect(() =>{
        API_URL.get("/servicios").then((response) => {
            setServicios(response.data);  //se cambia el estado para re-dibujar la pagina
        });
    }, []);

    const indice = params.id;
    let servicio = servicios.forEach(servElem => {
        if (servElem.id === indice){
            servElem.nombre;
        };
    });

    return (
        <>
            <Header titulo = "SEGUIMIENTO DE SERVICIOS"
                    opcion1 = "Volver" opcion1link="/"
                    opcion2 = {servicio} opcion2link="" //{params.id} opcion2link=""
                    opcion3 = "Hola Daniel" opcion3link="" />

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

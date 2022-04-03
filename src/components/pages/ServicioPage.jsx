//servicios.html

import { HeaderService } from '../common/HeaderService';
import { Footer } from '../common/Footer';
import { useEffect, useState } from "react";
import { api } from "../../api/api.js";
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
        api.get("/servicios").then((response) => {
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

{           /* GRID CONTAINER */}
            <div className="gridContainerService">

                <div className="listaEmpService">
                    <ul><p>Empresa 1</p></ul>
                    <ul><p>Empresa 2</p></ul>
                    <ul><p>Empresa 3</p></ul>
                    <ul><p>Empresa 4</p></ul>
                    <ul><p>Empresa 5</p></ul>
                </div>

                <div className="empSelService">
                    <p>Developito</p>
                    <p>094 054244</p>
                    <p>berretta.daniel@gmail.com</p>
                </div>

                <div className="menuService">
                    <button>Nuevo Trabajo</button>
                    <button>Finalizadas</button>
                </div>

                <div className="tareasHechasFecha">
                    <p>10/01/1997</p>
                </div>

                <div className="tareasHechasObs">
                    <p>Todo cambio</p>
                </div>

                <div className="menuTareasService">
                    <p>Tarea realizada
                        <input type="text" name="tareaHechaDesc" /></p>
                    <button>Agregar</button>
                </div>

{              /* Footer */}
                <Footer />
            </div>
        </>
    );
}

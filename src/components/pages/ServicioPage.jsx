//servicios.html

import { HeaderService } from '../common/HeaderService';
import { Footer } from '../common/Footer';
import { useEffect, useState } from "react";
import { api } from "../../api/api.js";
import { useParams } from 'react-router-dom';

export function ServicioPage() {
    //Para obtener el id del servicio que viene por la url (ver en App.jsx servicio/:id)
    //El id del servicio me permite obtener el nombre desde el DB.JSON (ahora desde la BD directamente) y ese valor es
    //el que se pasa al parametro "opcion2" en el Header.

    const params = useParams();

    //PARA MANEJO DE ESTADOS
    const [{servicio, transpHeaderImg}, setServicio] = useState("");  //nombre del servicio en el Header
    const [listaEmpresasAux, setEmpresas] = useState([]);  //lista de empresas de ese servicio
    const [{empresaNombre, empresaTel, empresaMail, empresaId}, setEmpresaSel] = useState({});  //datos de la empresa seleccionada
    const [tareas, setTareas] = useState([]);  //lista de tareas hechas
    const [fecAgrTarea, setFecAgrTarea] = useState("");  //Fecha de nueva tarea realizada para agregar
    const [descAgrTarea, setDescAgrTarea] = useState("");  //Descripcion de nueva tarea realizada para agregar
    const [errorBD, setErrorBD] = useState("");  //Para mostrar si hubo un error al agregar una nueva tarea (No funciono)

    //Efecto secundario - fetch con AXIOS
    useEffect(() =>{

        //Buscar datos del servicio
        api.get("/servicios/" + params.id).then((response) => {
            const servicio = response.data.nombre;
            const transpHeaderImg = response.data.archivoTransp; // ----> imagen del header segun el servicio
            setServicio({servicio, transpHeaderImg});  //se cambia el estado para re-dibujar la pagina
        });

        //Buscar empresas del servicio
        api.get("/empresas/servicio/"  + params.id).then((response) => {
            const empresas = response.data;
            let listaEmpresasAux = [];
            empresas.forEach((elemEmp) => {
                listaEmpresasAux.push(elemEmp);
            });
            setEmpresas(listaEmpresasAux);
        });

        //Considero tareas para el trabajo 2 a modo de completar el obligatorio
        //Las tareas se cargan en los <div className="tareasHechasFecha"> y <div className="tareasHechasObs">
        api.get("/tareas/2").then((responseRef) => {
            let tareasRefresh = responseRef.data;
            setTareas(tareasRefresh);
        });

    }, []);


    //Se muestran los datos de la empresa seleccionada al hacerle un click
    const handleClick = ((empresa) => {
        const empresaNombre = empresa.nombre;
        const empresaTel = empresa.telefono;
        const empresaMail = empresa.email;
        const empresaId = empresa.id;
        setEmpresaSel({empresaNombre, empresaTel, empresaMail, empresaId});
    });


    //Para manejar los cambios de fecha y descripcion de la nueva tarea a agregar
    const handleFecAgrTareaChange = ((event) => {
        setFecAgrTarea(event.target.value);
    });

    const handleDescAgrTareaChange = ((event) => {
        setDescAgrTarea(event.target.value);
    });

    //Evento click en el boton de agregar la nueva tarea
    const handleClickAddTarea = ((event) => {
        event.preventDefault();
        
        //Llamo a la API para hacer el insert en la tabla "tareas"
        api.put("/tareas", {fecha: fecAgrTarea, descripcion: descAgrTarea, idEmpresa: empresaId}).then(
            (response) => {
                //Despues de agregarse la tarea, los campos de fecha y descripcion quedan en blanco
                setFecAgrTarea("");
                setDescAgrTarea("");
            },
            (errorResponse) => {
                setErrorBD(errorResponse.mensaje);
            }
        );

        //Llamo a la API para obtener la lista de tareas actualizada y asi mostrarla en la UI
        //pero solo se ve la nueva tarea al dar un F5 en el navegador
        //No se que es lo que esta mal
        api.get("/tareas/2").then((response) => {
            let tareas = response.data;
            setTareas(tareas);
        });

    });


    return (
        <>
            <HeaderService titulo = "SEGUIMIENTO DE SERVICIOS"
                    opcion1 = "Volver" opcion1link="/"
                    opcion2 = {servicio} opcion2link=""
                    opcion3 = "Hola Daniel" opcion3link=""
                    imagenTransp = {transpHeaderImg}/>

{           /* GRID CONTAINER */}
            <div className="gridContainerService">

                <div className="listaEmpService">  {/*Lista de empresas del servicio */}
                    {listaEmpresasAux.map((empresa, index) => {
                        return (
                            <ul><button onClick ={() => handleClick(empresa)}>{ empresa.nombre }</button></ul>
                        )}
                    )}
                </div>

                <div className="empSelService">  {/*Datos de la empresa elegida */}
                    <p>{empresaNombre}</p>
                    <p>{empresaTel}</p>
                    <p>{empresaMail}</p>
                </div>

                <div className="menuService">  {/*Botones previstos para empezar un nuevo trabajo y ver los finalizados de la empresa seleccionada */}
                    <button>Nuevo Trabajo</button>
                    <button>Finalizadas</button>
                </div>
                
                <div className="tareasHechasFecha">  {/*Lista de fechas de las tareas realizadas */}
                    {tareas.map((tarea, index) => {
                        return (
                            <p>{tarea.fecha}</p>
                        )}
                    )}
                </div>

                <div className="tareasHechasObs">  {/*Lista de descripcion de las tareas realizadas */}
                {tareas.map((tarea, index) => {
                        return (
                            <p>{tarea.descripcion}</p>
                        )}
                    )}
                </div>

                <div className="menuTareasService">  {/*Formulario para agregar una nueva tarea */}
                    <form onSubmit={handleClickAddTarea}>

                        <p>Fecha:
                        <input
                            value={fecAgrTarea}
                            onChange={handleFecAgrTareaChange}
                            type="text"
                            name="tareaHechaFec"
                            required
                        /></p>

                        <p>Tarea realizada:
                        <input
                            value={descAgrTarea}
                            onChange={handleDescAgrTareaChange}
                            type="text"
                            name="tareaHechaDesc"
                            required
                        /></p>

                        <button type="submit">Agregar</button>
                        <span>{errorBD}</span>
                    </form>
                </div>

{              /* Footer */}
                <Footer />
            </div>
        </>
    );
}

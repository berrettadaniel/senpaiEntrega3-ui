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
    const [{servicio, transpHeaderImg}, setServicio] = useState("");   //nombre del servicio en el Header
    const [listaEmpresasAux, setEmpresas] = useState([]);              //lista de empresas de ese servicio

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

    }, []);


    const handleClick = (empresa) => {
        console.log(empresa)
        //const [{empresaNombre, empresaTel}, setEmpresaSel] = useState("");
        //useEffect (() => {
            const empresaNombre = empresa.nombre;
            const empresaTel = empresa.telefono;
        //    setEmpresaSel({empresaNombre, empresaTel});
        //})
        // api.get("/servicio/" + { indice }).then((response) => {
        //     const empresas = response.data;
        //     let listaEmpresasAux = [];
        //     empresas.forEach((elemEmp) => {
        //         listaEmpresasAux.push(elemEmp);
        //     });
        //     setEmpresas(listaEmpresasAux);
        // });
    };


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
                    {listaEmpresasAux.map((empresa, index) => {
                        return (
                            <ul><button onClick ={() => handleClick(empresa)}>{ empresa.nombre }</button></ul>
                        )}
                    )}
                </div>

                <div className="empSelService">
                    <p>empresaNombre</p>
                    <p>empresaTel</p>
                    <p>empresaMail</p>
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

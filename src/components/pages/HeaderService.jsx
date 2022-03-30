//Header del sitio

// Las props esperadas son:
// titulo, es el titulo que aparece arriba
// opcion1, es el texto del link que aparece a la izquierda debajo del titulo
// opcion1link, el link correspondiente
// opcion2, es el texto del link que aparece al medio debajo del titulo
// opcion2link, el link correspondiente
// opcion3, es el texto del link que aparece a la dercha debajo del titulo
// opcion3link, el link correspondiente
// imagenTransp ??????


/*
<div className="service" key={servicio.id}>
                            <Link to={`/servicio/${num}`}>
                                <img
                                    src={servicio.archivo}
                                    alt={servicio.nombre} />
                                <h2>{servicio.nombre}</h2>
                            </Link>
                        </div>
*/


import { Link } from 'react-router-dom';


export function HeaderService(props) {
    const imagenVar = `url(/src` + props.imagenTransp + `)`
    return (
        <div className="headerService"
            background-image = { imagenVar }>

            <h1 className="titulo">{ props.titulo }</h1>
            
            <nav>
                <div>
                    <Link to={ props.opcion1link }>
                        <h2>{ props.opcion1 }</h2>
                    </Link>
                </div>

                <div>
                    <Link to={ props.opcion2link }>
                        <h2>{ props.opcion2 }</h2>
                    </Link>
                </div>

                <div>
                    <Link to={ props.opcion3link }>
                        <h2>{ props.opcion3 }</h2>
                    </Link>
                </div>
            </nav>

        </div>
    );
}

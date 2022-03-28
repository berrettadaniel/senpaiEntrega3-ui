//Header del sitio

// Las props esperadas son:
// titulo, es el titulo que aparece arriba
// opcion1, es el texto del link que aparece a la izquierda debajo del titulo
// opcion1link, el link correspondiente
// opcion2, es el texto del link que aparece al medio debajo del titulo
// opcion2link, el link correspondiente
// opcion3, es el texto del link que aparece a la dercha debajo del titulo
// opcion3link, el link correspondiente

import { Link } from 'react-router-dom';

export function Header(props) {
    return (
        <div className="header">

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

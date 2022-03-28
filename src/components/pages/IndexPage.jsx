//index.html

import { Header } from '../common/Header';
import { IndexGridContainer } from "./IndexGridContainer";

export function IndexPage() {
    return (
        <>
            <Header titulo = "REFORMAS Y REPARACIONES"
                    opcion1="Que ofrecemos?" opcion1link="/ofrecemos"
                    opcion2="Contacto" opcion2link="/contacto"
                    opcion3="Ingrese aqui" opcion3link="/login" />
            <IndexGridContainer />
        </>
);
}

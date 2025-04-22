import { useEffect, useState } from "react";
import Instrumento from "../../models/instrumento";
import { getInstrumentosJSONFetch } from "../../services/api";
import TarjetaGrillaInstrumento from "../cards/TarjetaGrillaInstrumento";

function GrillaInstrumentos(){
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

    const getInstrumentos = async () => {
        let datos:Instrumento[] = await getInstrumentosJSONFetch();
        setInstrumentos(datos);
    }

    useEffect(() => {
        getInstrumentos();
    }, []);

    return (
        <>
            {instrumentos.map((instrumento:Instrumento) => 
                    <TarjetaGrillaInstrumento key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} precio={instrumento.precio} imagen={instrumento.imagen} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida}></TarjetaGrillaInstrumento>
                )}
        </>
    )
}

export default GrillaInstrumentos;
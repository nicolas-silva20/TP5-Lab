import { useState, useEffect } from 'react';
import TarjetaSliderInstrumento from "../cards/TarjetaSliderInstrumento";
import { getInstrumentosJSONFetch } from "../../services/api";
import Instrumento from '../../models/instrumento';

function SliderInstrumento() {
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    // Obtiene los instrumentos desde la API
    const getInstrumentos = async () => {
        let datos:Instrumento[] = await getInstrumentosJSONFetch();
        // Filtrar solo los instrumentos con más de 10 ventas
        const instrumentosFiltrados = datos.filter(instrumento => {
            // Convertir cantidadVendida a número para comparación
            const ventas = parseInt(instrumento.cantidadVendida);
            return ventas > 10;
        });
        setInstrumentos(instrumentosFiltrados);
    }

    // Cargar los instrumentos al montar el componente
    useEffect(() => {
        getInstrumentos();
    }, []);

    return (
        <>
            <TarjetaSliderInstrumento instrumentos={instrumentos} />
        </>
    );
}   

export default SliderInstrumento;
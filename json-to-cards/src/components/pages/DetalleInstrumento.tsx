import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Instrumento from "../../models/instrumento";
import { getInstrumentPorIdFetch } from "../../services/api";
import TarjetaDetalleInstrumento from '../cards/TarjetaDetalleInstrumento';
import Navbar from './Navbar';


export function DetalleInstrumento() {
    const { idInstrumento } = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>();

    const getInstrumentoItem = async () => {
        const instrumentoSelect: Instrumento = await getInstrumentPorIdFetch(Number(idInstrumento));
        setInstrumento(instrumentoSelect);
    };

    useEffect(() => {
        getInstrumentoItem();
    }, [idInstrumento]);

    return (
        <>
            <Navbar />
            {/* renderiza <TarjetaDetalleInstrumento> si instrumento existe (no es undefined). */}
            {instrumento && <TarjetaDetalleInstrumento instrumento={instrumento} />}
        </>
    );
}
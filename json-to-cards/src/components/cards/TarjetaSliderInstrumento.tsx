import { useState, useRef } from 'react';
import Instrumento from '../../models/instrumento';
import '../styles/TarjetaSliderInstrumento.css';

interface TarjetaSliderInstrumentoProps {
    instrumentos: Instrumento[];
}

function TarjetaSliderInstrumento({ instrumentos }: TarjetaSliderInstrumentoProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [, setIsScrolling] = useState(false);

    // Funciones para controlar el desplazamiento del slider
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -300, // desplaza 300px hacia la izquierda
                behavior: 'smooth' // animación suave

            });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 300, // desplaza 300px hacia la derecha
                behavior: 'smooth' // animación suave

            });
        }
    };

    return (
        <div className="slider-instrumentos">
            <div className="slider-header">
                <h2 className="slider-titulo">Instrumentos Más Vendidos</h2>
            </div>
            
            <div className="slider-wrapper">
                <button 
                    className="slider-control slider-control-left" 
                    onClick={scrollLeft}
                    aria-label="Deslizar a la izquierda"
                >
                    &lt;
                </button>
                <div 
                    className="slider-contenedor" 
                    ref={sliderRef}
                    onMouseDown={() => setIsScrolling(true)}
                    onMouseUp={() => setIsScrolling(false)}
                    onMouseLeave={() => setIsScrolling(false)}
                >
                    {instrumentos.map((item) => (
                        <div className="slider-item" key={item.id}>
                            <div className="tarjeta-instrumento">
                                <div className="tarjeta-container">
                                    <div className="tarjeta-imagen-container">
                                        <img src={`./img/${item.imagen}`} alt={item.instrumento} className="tarjeta-imagen" />
                                    </div>
                                    <div className="tarjeta-info">
                                        <h3 className="tarjeta-titulo">{item.instrumento}</h3>
                                        <p className="tarjeta-vendidos">{item.cantidadVendida} vendidos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button 
                    className="slider-control slider-control-right" 
                    onClick={scrollRight}
                    aria-label="Deslizar a la derecha"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default TarjetaSliderInstrumento;
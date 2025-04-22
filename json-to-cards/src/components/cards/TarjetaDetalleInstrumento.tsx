import { useNavigate } from 'react-router-dom';
import Instrumento from '../../models/instrumento';
import ObtenerEnvio from '../utils/ObtenerEnvio'
import EnvioInfo from '../utils/EnvioInfo';
import '../styles/tarjetaDetalleInstrumento.css';

function TarjetaDetalleInstrumento(props: { instrumento: Instrumento }) {
    const instrumento = props.instrumento;
    const { envio, claseEnvio, iconoEnvio } = ObtenerEnvio(instrumento.costoEnvio);

    const navigate = useNavigate();

    const handleVolver = () => {
        // Navega primero a la página home
        navigate('/home');
        
        // Espera a que se complete la navegación 
        setTimeout(() => {
            const element = document.getElementById('productos'); // busca el elemento con ID "productos"
            if (element) {
                // Calcula su posición y le aplica un desplazamiento
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80; 
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100); // 100 milisegundos de espera para que cargue la página
    };


    return (
        <div className="envoltura-detalle-producto">
            <div className="contenedor-detalle-producto">
                <div className="detalle-producto-izquierda">
                    <img src={"/img/" + instrumento?.imagen} alt={instrumento?.instrumento} className="imagen-principal-producto" />
                    <div className="caja-descripcion-producto">
                        <h3 className="titulo-descripcion-producto">Descripción:</h3>
                        <p className="texto-descripcion-producto">{instrumento?.descripcion}</p>
                    </div>
                </div>
                <div className="detalle-producto-derecha">
                    <p className="cantidad-vendida-producto">{instrumento?.cantidadVendida} vendidos</p>
                    <h1 className="titulo-producto">{instrumento?.instrumento}</h1>
                    <h2 className="precio-producto">$ {instrumento?.precio}</h2>
                    <div className="especificaciones-producto">
                        <p className="marca-producto">Marca: {instrumento?.marca}</p>
                        <p className="modelo-producto">Modelo: {instrumento?.modelo}</p>
                    </div>
                    <div className="informacion-envio-producto">
                        <p className="titulo-envio-producto">Costo Envío:</p>
                        <EnvioInfo claseEnvio={claseEnvio} iconoEnvio={iconoEnvio} envio={envio} />
                    </div>
                    <button 
                        type="button" 
                        onClick={handleVolver} 
                        className="boton-volver-producto"
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TarjetaDetalleInstrumento;
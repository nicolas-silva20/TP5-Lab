import Instrumento from '../../models/instrumento';
import ObtenerEnvio from '../utils/ObtenerEnvio'
import EnvioInfo from '../utils/EnvioInfo';
import '../styles/tarjetaGrillaInstrumento.css';

function TarjetaGrillaInstrumento(args: Instrumento) {
    const { envio, claseEnvio, iconoEnvio } = ObtenerEnvio(args.costoEnvio);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="image-container">
                        <img src={`./img/${args.imagen}`} alt={args.imagen} className="image" />
                    </div>
                    <div className="informacion">
                        <h5 className="card-title">{args.instrumento}</h5>
                        <p className="card-text">${args.precio}</p>
                        <EnvioInfo claseEnvio={claseEnvio} iconoEnvio={iconoEnvio} envio={envio} />
                        <p className="card-vendidos">{args.cantidadVendida} vendidos</p>
                        <a href={`detalle/${args.id}`}>
                            <button type='button' className='btn'>Detalles</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default TarjetaGrillaInstrumento;
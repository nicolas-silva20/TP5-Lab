import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    const location = useLocation(); // Obtiene la URL actual 
    const navigate = useNavigate(); // Cambiar de ruta programáticamente (Redireccionamiento).
    const isHomePage = location.pathname === '/home'; //verifica la pagina actual /home.
    
    const scrollToSectionWithOffset = (sectionId: string, offset: number = 80) => {
        const element = document.getElementById(sectionId); // Busca el elemento con ese ID
        if (element) {
            // Calculamos la posición del elemento
            const elementPosition = element.getBoundingClientRect().top;
            // Obtenemos la posición actual de scroll
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            // scroll animado
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    const handleNavigation = (e: React.MouseEvent, section: string) => {
        e.preventDefault(); // evita comportamiento por defecto (como recargar)
        
        if (isHomePage) {
             // Si esta en /home, solo hacé scroll
            scrollToSectionWithOffset(section);
        } else {
            // Si NO esta en /home, navega primero
            navigate(`/home`);

             // Espera un poco para que el componente cargue y luego scrolleá
            setTimeout(() => {
                scrollToSectionWithOffset(section);
            }, 100);
        }
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <a href="#home" onClick={(e) => handleNavigation(e, 'home')}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#ubicacion" onClick={(e) => handleNavigation(e, 'ubicacion')}>
                        ¿Dónde Estamos?
                    </a>
                </li>
                <li>
                    <a href="#productos" onClick={(e) => handleNavigation(e, 'productos')}>
                        Productos
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
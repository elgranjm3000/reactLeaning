import React, {Component} from "react";
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        var btnString = "Leer más" 
        return (
        <header id="header">
            <div className="center">
                {/* LOGO */ }
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>React
                    </span>
                </div>
                
                {/* MENU */ }
                <nav id="menu">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/ruta-prueba">Blog</Link>
                        </li>
                        <li>
                            <Link to="/segunda-prueba">Formulario</Link>
                        </li>
                        <li>
                            <Link to="/pagina1">Pagina 1</Link>
                        </li>
                        <li>
                        <Link to="/segunda-prueba">Pagina 2</Link>
                        </li>                            
                    </ul>
                </nav>

                {/* LIMPIAR FLOTANDO */ }
                <div className="clearfix"></div>
            </div>
        </header>
        );
    }
}

export default Header;
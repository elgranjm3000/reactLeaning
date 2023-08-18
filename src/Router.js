import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SeccionPrueba from './components/SeccionPrueba'
import Micomponente from "./components/Micomponente";
import Peliculas from './components/Peliculas';
import Pagina from "./components/Pagina";
import NotFound from './components/Errors'
import Header from './components/Header';
import Slyder from './components/Slyder';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
class Router extends Component{

    

    render(){
        var btnString = "Leer más" 
        return(           
            
                <BrowserRouter>
                 <Header/>
                 <Slyder 
                    title = "Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                    btn = {btnString}
                />
                 <div className="center">
                    <Routes>
                            <Route exact path="/" element={<Peliculas/>} ></Route>
                            <Route exact path="/ruta-prueba" element={<SeccionPrueba/>} ></Route>
                            <Route exact path="/segunda-prueba" element={<Micomponente/>} ></Route>
                            <Route exact path="/pagina1" element={<h1>Prueba</h1>}/>
                            <Route exact path="/pagina/:userid" element={<Pagina/>}/>
                            <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Sidebar/>
                        <div className='clearfix'></div>
                    </div>
                    <Footer/>
                
                </BrowserRouter>    
            
        )
    }
}
export default Router;

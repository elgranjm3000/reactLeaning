import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SeccionPrueba from './components/SeccionPrueba'
import Micomponente from "./components/Micomponente";
import Peliculas from './components/Peliculas';
import NotFound from './components/Errors'

class Router extends Component{
  
    render(){
        return(
            
            
                <BrowserRouter>
                    <Routes>
                            <Route exact path="/" element={<Peliculas/>} ></Route>
                            <Route exact path="/ruta-prueba" element={<SeccionPrueba/>} ></Route>
                            <Route exact path="/segunda-prueba" element={<Micomponente/>} ></Route>
                            <Route exact path="/pagina1" element={<h1>Prueba</h1>}/>
                            <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>    
            
        )
    }
}
export default Router;

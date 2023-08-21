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
import Blog from './components/Blog'
import Home from "./components/Home";
import Formulario from "./components/Formulario";
class Router extends Component{

    

    render(){
        var btnString = "Leer más" 
        return(           
            
                <BrowserRouter>
                 <Header/>
                 
                
                    <Routes>
                            <Route exact path="/" element={<Home/>} ></Route>
                            <Route exact path="/blog" element={<Blog/>} ></Route>
                            <Route exact path="/formulario" element={<Formulario/>}></Route>
                            <Route exact path="/peliculas" element={<Peliculas/>}></Route>
                            <Route exact path="/pagina1" element={<h1>Prueba</h1>}/>
                            <Route exact path="/pagina/:userid" element={<Pagina/>}/>
                            <Route path="*" element={<NotFound />} />
                    </Routes>
                 
                    <Footer/>
                
                </BrowserRouter>    
            
        )
    }
}
export default Router;

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Peliculas from './components/Peliculas';
import Pagina from "./components/Pagina";
import NotFound from './components/Errors'
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog'
import Home from "./components/Home";
import Formulario from "./components/Formulario";
class Router extends Component{

    

    render(){
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
                            <Route exact path="/blog/article/:id" render={() =>  (
                               <React.Fragment>
                                    <h1>Pagina</h1>
                                </React.Fragment>
                             )} />
                            <Route path="*" element={<NotFound />} />
                    </Routes>
                 
                    <Footer/>
                
                </BrowserRouter>    
            
        )
    }
}
export default Router;

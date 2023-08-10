import React, { Component } from "react";
import Micomponente from './Micomponente';
import Peliculas from './Peliculas';


class SeccionPrueba extends Component {
     constructor(props){
        super(props)
        this.state = {
            contador:0
        }
     }
     holaMundo(nombre){
        var presentacion = (
           <div><h2>Hola soy {nombre}</h2>
          <h3>Mi edad es 34</h3></div>
        )
        return presentacion
      }
      sumar(e){
        this.setState({
            contador : (this.state.contador+1)
        })
      }
      restar(e){
        this.setState({
            contador : (this.state.contador-1)
        })
      }
    render() {
        var nombre = "Joseph Muentes"

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h2 className="subheader">Funciones y JSX Basico</h2>
                {this.holaMundo(nombre)}

                <h2 className="subheader">Estado</h2>
                <p>
                    {this.state.contador}
                    
                </p>
                <p>
                    <button className="button" onClick={this.sumar.bind(this)}>Sumar</button>
                    <button className="button" onClick={this.restar.bind(this)}>Restar</button>
                </p>

                <section className="componentes">
                    <Micomponente />
                    <Peliculas />
                </section>
                
            </section>
        );
    }
}

export default SeccionPrueba;
import React, { Component } from "react";
import Micomponente from './Micomponente';
import Peliculas from './Peliculas';


class SeccionPrueba extends Component {
     holaMundo(nombre){
        var presentacion = (
           <div><h2>Hola soy {nombre}</h2>
          <h3>Mi edad es 34</h3></div>
        )
        return presentacion
      }
    render() {
        var nombre = "Joseph Muentes"

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {this.holaMundo(nombre)}

                <section className="componentes">
                    <Micomponente />
                    <Peliculas />
                </section>
            </section>
        );
    }
}

export default SeccionPrueba;
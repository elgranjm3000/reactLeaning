import React, { Component } from "react";
import Pelicula from "./Pelicula";
class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Guardianes de la galaxia VOL 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm1u7e67MgRlp477PnxG4J9TcKmFGqvQE4JgqYxf0h4zn58hSGNXcWv2Ns_I&s=10' },
            { titulo: 'Alias', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNJSLrLmOthFz8F1pE93GewSlx_pvaveBfWh_C9WBoVW6KL-VxgVlFNdiGOo&s=10' },
            { titulo: 'JUNG E', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtARxqFLFGpxvfnH-Xhvfqlpl-05JJmrz0Tpy_Onu1zCuxQtPJ1HSr7FZ&amp;s=0' }
        ],
        nombre: 'Joseph Muentes',
        favorita: ''
    };

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "Batman Begins"
        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula) => {
        console.log("favorita marcada")
        console.log(pelicula)
        this.setState({
            favorita: pelicula
        })
    }

    componentDidMount(){
        alert("se acaba de cargar componente de pelicula")
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de peliculas de {this.state.nombre}</p>
                <div>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de Batman
                    </button>
                </div>
                { this.state.favorita.titulo ? (
                    <p className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es:</strong>
                    <span>{this.state.favorita.titulo}</span>
                    </p>
                    ) : (
                        <p>No hay pelicula favorita</p>
                    )
                }
                
                {
                    this.state.peliculas.map((peliculas, i) => {
                        return (
                            <Pelicula 
                                key={i} 
                                peliculas={peliculas} 
                                marcarFavorita = {this.favorita} 
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Peliculas;
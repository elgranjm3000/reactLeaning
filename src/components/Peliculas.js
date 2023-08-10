import React, {Component} from "react";

class Peliculas extends Component{

    state = {
        peliculas : [
            {titulo : 'Guardianes de la galaxia VOL 3', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm1u7e67MgRlp477PnxG4J9TcKmFGqvQE4JgqYxf0h4zn58hSGNXcWv2Ns_I&s=10'},
            {titulo : 'Alias', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNJSLrLmOthFz8F1pE93GewSlx_pvaveBfWh_C9WBoVW6KL-VxgVlFNdiGOo&s=10'},
            {titulo : 'JUNG E', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtARxqFLFGpxvfnH-Xhvfqlpl-05JJmrz0Tpy_Onu1zCuxQtPJ1HSr7FZ&amp;s=0'}
        ],
        nombre: 'Joseph Muentes'
    };
    render(){
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de peliculas de {this.state.nombre}</p>
                {
                    this.state.peliculas.map((peliculas,i)=>{
                        return (
                            <article className="article-item" id="article-template">
                            <div class="image-wrap">
                                <img src={peliculas.image} alt={peliculas.titulo} />
                            </div>
        
                            <h2>{peliculas.titulo}</h2>
                            <span class="date">
                                Hace 5 minutos
                            </span>
                            <a href="#">Leer más</a>
    
                            <div class="clearfix"></div>
                             </article>
    
                        )
                    })
                }
            </div>
        );
    }
}

export default Peliculas;
import React from 'react'

class Micomponente extends React.Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ["Tomate","Queso","Jamon cocido"],
            caloria: 400
        }
        return (
            <React.Fragment>
            <h1>Hola soy el componente creado</h1>
            <h2>Estoy probando el componente</h2>
            <h1>{receta.nombre}</h1>
            <ol>
                {
                    receta.ingredientes.map((ingrediente, i) => {
                        console.log(ingrediente);
                        return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                        );
                    } )
                }
            </ol>
            <hr/>
            </React.Fragment>
        )
    }
}

export default Micomponente;
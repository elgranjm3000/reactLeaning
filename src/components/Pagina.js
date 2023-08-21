import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pagina(){
    const params = useParams();
    return (
        <React.Fragment>
            <div id='content'>
                <p>Prueba {params.userid}</p>
            </div>
        </React.Fragment>
    )
}
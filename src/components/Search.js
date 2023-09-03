import React from "react";
import Slyder from "./Slyder";
import Sidebar from "./Sidebar";
import Articles from "./Articles";
import { useParams  } from "react-router-dom";

const Search= () =>{
    const params = useParams();
    console.log(params);
    return (
        <div id="home">
                <Slyder
                    title={"Busqueda :"+params.search}
                    size="slider-big" 
                    btn="Leer mas"/>

                <div className="center" id="content">
                    <Articles                        
                        search="true"
                        keySearch={params.search}
                    />
                   
                    <div className="clearfix"></div>
                </div>
                <Sidebar />
                <div className='clearfix'></div>

            </div>
    )
}

export default Search
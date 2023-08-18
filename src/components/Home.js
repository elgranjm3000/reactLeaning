import React, { Component } from "react";
import Slyder from "./Slyder";
import Sidebar from "./Sidebar";
class Home extends Component {


    render() {

        return (
            <div id="home">
                <Slyder
                    title="Home"
                    size="slider-big" 
                    btn="Leer mas"/>

                <div className="center" id="content">
                   
                    <div className="clearfix"></div>
                </div>
                <Sidebar />
                <div className='clearfix'></div>

            </div>


        );
    }
}

export default Home;
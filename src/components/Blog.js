import React, { Component } from "react";
import Slyder from "./Slyder";
import Sidebar from "./Sidebar";
class Blog extends Component {


    render() {

        return (
            <div id="blog">
                <Slyder
                    title="Blog"
                    size="slider-small" />

                <div className="center" id="content">
                   
                    <div className="clearfix"></div>
                </div>
                <Sidebar blog="true" />
                <div className='clearfix'></div>

            </div>


        );
    }
}

export default Blog;
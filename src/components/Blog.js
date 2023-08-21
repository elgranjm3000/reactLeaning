import React, { Component } from "react";
import Slyder from "./Slyder";
import Sidebar from "./Sidebar";
import Articles from "./Articles";
class Blog extends Component {

    state = {
        article: {}
    }

    render() {
        /*axios.get("http://172.19.0.6:3300/articles")
        .then(res=>{
            console.log(res.data)
            this.setState({
                article : res.data.results,
                status:"success"
            })
        });*/
        return (
            <div id="blog">
                <Slyder
                    title="Blog"
                    size="slider-small" />

                <div className="center" id="content">
                    <div id="articles">
                        <Articles/>
                        </div>
                    <div className="clearfix"></div>
                </div>
                <Sidebar blog="true" />
                <div className='clearfix'></div>

            </div>


        );
    }
}

export default Blog;
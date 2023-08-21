import React, { Component } from "react";
import axios from 'axios'
import Global from "../Globals";
import Moment from 'react-moment'
import 'moment/locale/es'
class Articles extends Component {

    url = Global.url;
    imagen = Global.image;
    state = {
        article: [],
        status:null
    }
    componentWillMount(){
        this.getArticle()
    }
    
   getArticle = () =>{
        axios.get(this.url+"articles")
        .then(res=>{
            console.log(res.data.results)
            this.setState({
                article : res.data.results,
                status:"success"
            })
            console.log(this.state.article)
        });
   }
    render() {
        if(this.state.article.length > 1){
            var listArticle = this.state.article.map((article)=>{
                return(
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            <img src={this.imagen} alt="Paisaje" />
                        </div>
    
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>{article.date}</Moment>
                            
                        </span>
                        <a href="#">Leer más</a>

                        <div className="clearfix"></div>
                    </article>
                );
            })
        return(
            <div id="articles">
                {listArticle}
            </div>
        ); 
      }else if(this.state.article.length === 0 && this.state.status==="success"){
        return(
            <div id="articles">
                <h2 className="subHeader">NO hay articulos para mostrar</h2>
                <p>Todavia no hay contenido </p>
            </div>
        ); 
      }else{
        return(
            <div id="articles">
                <h2 className="subHeader">Cargando...</h2>
                <p>Espere mientras carga el articulo</p>
            </div>
        );
      }
    }
}

export default Articles;
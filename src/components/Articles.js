import React, { useState, useEffect } from "react";
import {Link} from  'react-router-dom';
import axios from 'axios'
import Global from "../Globals";
import Moment from 'react-moment'
import 'moment/locale/es'

const Articles = (props) => {

    const[users,setUsers] = useState([])
    const[search,setSearh] = useState("")

    const url = Global.url;
    const imagen = Global.image;
    var home = props.home;
    var keySearch = props.keySearch;
   
    const getArticle = async () => {
        const response = await fetch(url+"articles")
        const data = await response.json()        
        setUsers(data.results)      
   }
    const getArticleLast = async () => {
        const response = await fetch(url+"articles/last")
        const data = await response.json()
        setUsers(data.results)       
   }
   const getArticleSerach = async (keySearch) => {
    const response = await fetch(url+"busqueda/"+keySearch)
    const data = await response.json()
    setUsers(data.results)        
}

useEffect( () =>{
    getArticleSerach(keySearch)

}, [])


return (
    <div>
    { users.map( (article) => (
        <article className="article-item" id="article-template">
        <div className="image-wrap">
            <img src={imagen} alt="Paisaje" />
        </div>

        <h2 key={article.id}>{article.title}</h2>
        <span className="date">
            <Moment fromNow>{article.date}</Moment>
            
        </span>
        <Link to={'/blog/article/'+article.id}>Leer más</Link>

        <div className="clearfix"></div>
    </article>
    ))}
    </div>
)
    
   /*getArticle = () =>{
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

   getArticleSerach = (keySearch) =>{
    axios.get(this.url+"busqueda/"+keySearch)
    .then(res=>{
        
        console.log(res.data.results)

            this.setState({
                article : res.data.results,
                status:"success"
            })
        })
        .catch( err => {
            this.setState({
                article : [],
                status:"success"
            })
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
    
                        <h2 key={article.id}>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>{article.date}</Moment>
                            
                        </span>
                        <Link to={'/blog/article/'+article.id}>Leer más</Link>

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
    }*/
}

export default Articles;
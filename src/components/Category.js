import React from "react";
import Appbar from "./Appbar";
import {Link} from "react-router-dom";

export class Categories extends React.Component{
    constructor(props)
    {
        super(props)
       this.state = { category :[]}
        this.getCategoriesFromCollection();

    } 
        categories = {};
        keys =[];
    getCategoriesFromCollection()
    {
      console.log("categories called");
      fetch('http://localhost:3000/categories', {})
        .then( (response) => {
          return response.json();
        })
        .then( (collection) => {
            this.categories = collection;
          this.keys= [...Object.keys(this.categories)];
        
           this.setState({category:this.keys}) 
             
          })
    };
    
    render()
    {
        return(
            <div>
                <Appbar/>
                <ul>

                {
                    this.state.category.map(function(ele){
                    return (<li><Link to={`rest_category/${ele}` } >{ele}</Link> 
                    </li>     
                      ); 
                    })
                }
                 
                 </ul>
                
                 
            </div>
        );
    }
}

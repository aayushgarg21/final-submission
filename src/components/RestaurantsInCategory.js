import React from "react";
import Appbar from "./../components//Appbar"
import MapsTransferWithinAStation from "material-ui/SvgIcon";
export class RestaurantsInCategory extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={data:{}}
        this.getRestaurantsFromCategories();
    
    }
          
       category = "";
       category = this.props.match.params.category_name;

    getRestaurantsFromCategories()
    {
      console.log("categories called");
      fetch('http://localhost:3000/categories', {})
        .then( (response) => {
          return response.json();
        })
        .then( (data) => {
         this.setState({data});  
     })
    };     
render()
{
    return(
        <div>
        <Appbar/>
        <div className="jumbotron container ">
        <h1>{this.category}</h1>
        <ul>
            <li>{this.state.data[this.category]}</li>
            
        </ul>
        </div>
        </div>
    );
}
}
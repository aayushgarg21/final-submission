import React from "react";
import Appbar from "./Appbar"

export class RestaurantDetail extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= { details:{}}
        this.callApp();
    }
  
 
    callApp()
    {
    fetch('https://developers.zomato.com/api/v2.1/restaurant?res_id='+ this.props.match.params.id, {
        headers: {
          "user-key": "9115190ac542cd032b874a38a5625591"
        }
      })
        .then( (response) => {
          return response.json();
        })
        .then( (details) => {
     this.setState({details});
  
        })
    } 
    render()
    {
        
       return(
           
           <div>
               <div className="jumbotron conatiner">
               <div className="card" >
               <img  src={this.state.details.thumb} alt="Card image cap"></img>
               <div className="card-body">
                <p className="card-text">{this.state.details.name}</p>
                <p>MENU</p>
              <p>{this.state.details.cuisines}</p>
              <hr/>
              <p>AVERAGE COST FOR TWO</p>
              <p>{this.state.details.average_cost_for_two}</p>
              <hr/>
          
               <a className="btn btn-primary" href= {this.state.details.url} target="_blank">Visit Site</a>
               </div>
           </div>  
           </div>    
           </div> 


       );
    }
}

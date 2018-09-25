
import React from"react";
import {Restaurant} from "./Restaurant"
export const Restaurants = (props)=> { 
    const style_row =
    {
        marginLeft:30
    }
    return(
          <div className="row" style={style_row}>
        
       { props.restaurants.map(element => {
            return (
                <Restaurant className="col-sm-4"  
                card = {element} 
                addRestaurantToCollection={props.addRestaurantToCollection}
                getCategoriesFromCollection={props.getCategoriesFromCollection}
                collecttion = {props.collecttion}
                 />
               
            )
        })}
       
        </div>
    )
}
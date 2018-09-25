import React from "react";
export const HandleSearchBar = (props) =>
{
    var style = {
        color: '#2c8e4d',
        fontSize: 50,
        margin:50
      };
      var style1 ={
          margin:50
      }
    return(
        
            <div className="jumbotron container">
            <h1 style = {style}>Discover restaurants delivering to your doorstep</h1>
            <input type="text" style = {style1} placeholder="Enter Restaurant Name" id="test"/>
            <button  className="btn btn-success" onClick = {props.getData}> SHOW RESTAURANTS </button>
        </div>
    );

}
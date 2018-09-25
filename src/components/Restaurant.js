import React from "react";
import {Link} from "react-router-dom"
export const Restaurant = (props)=>
{
  const style =  {
    maxWidth: 310,
    margin:10,
    marginLeft:5
  }
  const btn_style={
    padding :10
  }
  
    
    
  
  return(
    <div>
    <div className="card" style = {style}>
    <img className="card-img-top" src={props.card.restaurant.thumb} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">  {props.card.restaurant.name}</h5>
      <p className="card-text">{props.card.restaurant.location.address}</p>
      <Link to={`detail/${props.card.restaurant.R.res_id}` } className="btn btn-success btn-small">Reataurant detail page</Link> 
        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">ADD TO CATEGORY
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#" className="btn btn-priamry" data-toggle="modal" data-target="#myModal"    >ADD TO EXISTING</a></li>
    <li><a href="#" className="btn btn-priamry" data-toggle="modal" data-target="#myModal1" >CREATE NEW CATREGORY</a></li>
  
  </ul>
</div> 

  
    </div>
  </div>
  
<div className="modal fade" id="myModal1" role="dialog">
  <div className="modal-dialog modal-sm">
  <div className="modal-content">
        <div className="modal-header">
     
          <h4 className="modal-title">Create Catergry</h4>
        </div>
        <div className
        ="modal-body">
          <input type="text" id="add" placeholder=" Enter Category name"></input>
          <input type="hidden" id="custId" name="custId" value={props.card.restaurant.name}></input>

        </div>
        <div className="modal-footer">
        <button type="button"  className="btn btn-default" data-dismiss="modal" onClick={props.addRestaurantToCollection}>Create</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

        </div>
      </div>
  </div>
  
</div>
<div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog modal-sm">
  <div className="modal-content">
        <div className="modal-header">
     
          <h4 className="modal-title">Add to Existing Category</h4>
        </div>
        <div className="modal-body">
        {
          <p>Please Visit Categories section to add to existing</p>
        }

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={props.getCategoriesFromCollection}>Add</button>

        </div>
      </div>
  </div>
  
</div>
</div>
  );

}
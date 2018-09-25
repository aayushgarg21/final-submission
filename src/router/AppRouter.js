import React from "react";
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import {App} from "./../components/App";
import {RestaurantDetail} from "./../components/ReataurantDetail";
import{Categories} from "./../components/Category";
import {RestaurantsInCategory} from "./../components/RestaurantsInCategory";

  export const AppRouter = () =>{
      return(  
  <BrowserRouter>
  <div>
      
   <Switch>   
        <Route path="/" component={App} exact/>
        <Route path = "/detail/:id" component = {RestaurantDetail}/>
        <Route path = "/category" component = {Categories}/>
        <Route path = "/rest_category/:category_name" component = {RestaurantsInCategory}/>
   </Switch>    
</div>     
       </BrowserRouter>    
      );
 };
 
 
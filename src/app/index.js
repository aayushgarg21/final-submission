
import React from 'react';
import ReactDOM from "react-dom";
import {AppRouter} from "./../router/AppRouter";

class Index extends React.Component
{
  render()
  {
    return(
                 <div>
                   <AppRouter/>
                 </div>
    );

    
  }
}

ReactDOM.render(<Index/>,document.getElementById("root"));
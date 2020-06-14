import React, {Component, useState} from 'react';


class Item extends Component {


render(){

    return(
        


  <div  >
  <h1 class=" m-2 text-warning   badge-danger ">
{this.props.itm.t}
<span class="fa fa-trash delete  " onClick={()=>this.props.onDelete(this.props.itm.id)}></span>
  </h1>
  
  
</div  >
       
    );
}





}
export default Item;
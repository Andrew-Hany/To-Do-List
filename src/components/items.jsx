import React, {Component, useState} from 'react';
import Item  from './item';

class Items extends Component {


render(){

    return(
        


  <div  >

 {this.props.items.map(itm=>
   <Item
   key ={itm.id}
   itm={itm}
   onDelete={this.props.onDelete}
   >
     
   </Item>
)}
</div>
 
       
  );
    
}





}
export default Items;
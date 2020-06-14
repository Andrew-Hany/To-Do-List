import React, {Component, useState} from 'react';
import Im from './bg.jpg'
// import { black } from 'color-name';
class image extends Component {

render(){

    return(
        


  <div>
      
  <img src={Im} className=" w-50 mh-10" >
  </img>
      
         <svg onClick={this.props.onClear} class="clear fixed-top bi bi-arrow-counterclockwise" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"/>
  <path fill-rule="evenodd" d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"/>
</svg>

</div>
       
    );
}





}
export default image;
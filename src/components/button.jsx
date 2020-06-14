import React, {Component, useState} from 'react';



class Add extends Component {
    
    
    render(){
    
        return(
            
    
    
      <div className="w-100 ">
          
      <button className="  btn btn-success w-100" onClick={this.props.onAdd}>Add item</button>
            
    </div>
           
        );
    }
    
    
    
    
    
    }
    export default Add;
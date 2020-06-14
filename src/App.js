
import React, {Component, useState} from 'react';
import Input  from './components/input';
import Image  from './components/image';
import Button  from './components/button';
import Items  from './components/items';

import Css from './App.css'
class App extends Component  {
state={
  

  items:[
    
   
],
  text:" "
   
};

textChange =(e)=>{
this.state.text=e;
console.log(this.state.text)
};

handleAdd=()=>{
  if(this.state.text!=" "){
  const items =[...this.state.items]
  const lenght=items.length+1;
  items[lenght-1]= {id:lenght,t:this.state.text}
  this.state.items=items;
  
    
  
   this.setState({items});
   console.log(items)
   this.state.text=" "
  }
}
handleclear=()=>{
  const  items= this.state.items.filter(i => i.id<0); 
  
  this.setState({items});
}
handledelete=(itemID)=>{
  const  items= this.state.items.filter(i => i.id!==itemID); 

  this.setState({items});
}

render(){
  return (
    <div >
      
      <Image
      onClear={this.handleclear}
      />
      
    <div className="col-6 h-100 text-center badge badge-primary">
    
    <h1>Todo list</h1>
    <Input
    onChange={e=>this.textChange(e.target.value)}
    />
    
     <Items
     
     items={this.state.items}
    onDelete={this.handledelete}

   />
            <Button
            onAdd={this.handleAdd} />
           
    </div>
    </div>

  );
}
}
export default App;

import React , {Component } from "react";
import fire from "./fire";
import '../App.css';
import ListItems from "./ListItems";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


library.add(faTrash);
class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            items:[],
        currentItem:{
        text:'',
        key:''
      }
           }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    
      }
    
logout()
{
fire.auth().signOut();
}

render()
{
    return(
        <div>
          <form id="to-do-form" onSubmit={this.addItem}>
          <h1 className='color'> TO DO LIST </h1>
              <input type= "text" placeholder="Enter Text" 
               value= {this.state.currentItem.text} onChange={this.handleInput}/>
              <button type= "submit">Add</button></form>
          <ListItems items ={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
          <button className='logout' onClick={this.logout}>Logout</button>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
      
    })
  }

  addItem(e){
    e.preventDefault();
   
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })}
}
deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    }
}
export default Home;
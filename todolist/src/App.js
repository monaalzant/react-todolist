import React,{Component} from 'react';
import TodoItems from './components/ToDoitems/toDoItems'
import AddItem from './components/Additem/addItem'
class App extends Component {
  state={
    items:[
      {id:1,name:'mona',age:42},
      {id:2,name:'Mohammed',age:22},
      {id:3,name:'yusef',age:32},
    ]
  }

  deleteItem=(id)=>{
   let items=this.state.items.filter(item=>{
     return item.id !==id
   })
   this.setState({items:items})
  }
  addItem=(item)=>{
    item.id=Math.random();
   let items=this.state.items
   items.push(item);
   this.setState({items:items})
  }
  render(){
  return (
    <div className="App container">
     <h1 className="text-center">To do list</h1>
      <TodoItems items={this.state.items}deleteItem={this.deleteItem}/>
      <AddItem additem={this.addItem}/>
    </div>
  );
}
}

export default App;

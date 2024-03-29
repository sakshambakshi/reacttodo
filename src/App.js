import React , {Component} from 'react';
import  'bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class  App extends Component {
  state={
    items:[],
    id:uuid(), 
    item:'',
    editItem: false
  }
  handleChange = (event) => {

    this.setState({
      item: event.target.value
    })
  }
  
  clearList = () =>{
    this.setState({
      items:[]
    })
  }

  

  handleSubmit =(event)=>{
    event.preventDefault();
    if(!this.state.item) return null ; 
    const newItem = {
      id: this.state.id , 
      title: this.state.item
    };
    const updatedItems = [...this.state.items , newItem];

    this.setState({
      items:updatedItems,
      item:"",
      id: uuid(),
      editItem: false 
    } , ()=>{
      console.log(this.state)
    })
    
  }


  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id );
    this.setState({
      items:filteredItems
    })
  }
  
  handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id );
    const selectedItem = this.state.items.find( item => item.id === id );
    console.log(selectedItem)
    this.setState({
      items:filteredItems,
      item : selectedItem.title, 
      id: selectedItem.id,
      editItem: true 
    })

  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput editItem={this.state.editItem} handleSubmit={this.handleSubmit} item={this.state.item} handleChange={this.handleChange}  />
            <TodoList 
            handleEdit={this.handleEdit} 
            clearList={this.clearList} 
            handleDelete={this.handleDelete} 
            items={this.state.items}  />
          </div>
        </div>
      </div>
     
    );
  }
}

export default App;

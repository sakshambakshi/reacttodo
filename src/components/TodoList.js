import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
//    let todos = this.props.list  ;   
//    alert(todos)
//    todos.map((todo) =>{
//        return(
//            <TodoItem todo= {todo.item} key={todo.id} />
//        )
//    })
    const {items} = this.props ; 
    

    return (
      <ul className="list-group my-5">
        <h3 className="text-center text-capitalize">todo list</h3>
        {/* {console.log(todos)} */}

        {
            items.map(item =>(
                <TodoItem handleEdit={() => this.props.handleEdit(item.id)} handleDelete={() => this.props.handleDelete(item.id)}  title= {item.title} key={item.id} />
            ))
        }

        <button onClick={this.props.clearList} className="btn btn-danger btn-block mt-5">Clear All </button>
      </ul>
    )
  }
}

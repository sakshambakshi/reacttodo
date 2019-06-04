import React, { Component } from 'react'

export default class TodoItem  extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2"> 
        <h6>{this.props.title}</h6>
        <div className="todo-icon">
            <span  onClick={this.props.handleEdit} className="mx-2 text-success"> <i className="fas fa-pen"></i> </span>
            <span onClick={this.props.handleDelete} className="mx-2 text-danger"> <i className="fas fa-trash"></i> </span>
        </div>
      </li>
    )
  }
}

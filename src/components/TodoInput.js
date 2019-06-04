import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
          <form onSubmit={this.props.handleSubmit}>
              <div className="input-group">
                  <div className="input-group-prepend">
                      <div className="input-group-text bg-primary text-white">
                          <i className="fas fa-book"></i>
                      </div>
                  </div>
                  <input type="text"value={this.props.item} onChange={this.props.handleChange} placeholder="Add a todo item" className="form-control text-capitalize"/>
              </div>
              <button className={this.props.editItem ? "btn btn-block btn-success mt-3 " :"btn btn-block btn-primary mt-3 "} type="submit">{this.props.editItem ? "Edit Item " :"Add Item "}</button>
          </form>
      </div>
    )
  }
}

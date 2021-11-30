import React from 'react';



class Todo extends React.Component{
    handleClick = () => {
        this.props.handleToggle(this.props.list.id);
    }
    render() {
      return (<li onClick={this.handleClick}>{this.props.list.task} { this.props.list.completed?<span>- completed</span> : <span></span>}</li>)
    }
  }

  export default Todo;
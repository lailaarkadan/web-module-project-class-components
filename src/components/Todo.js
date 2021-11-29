import React from 'react';



class Todo extends React.Component{
    render() {
      return (<list>{this.props.list.task} { this.props.list.completed?<span>- completed</span> : <span></span>}</list>)
    }
  }

  export default Todo;
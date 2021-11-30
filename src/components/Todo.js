import React from 'react';



class Todo extends React.Component{
    render() {
      return (<li>{this.props.list.task} { this.props.list.completed?<span>- completed</span> : <span></span>}</li>)
    }
  }

  export default Todo;
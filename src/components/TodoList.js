import React from "react";
import Todo from './Todo';

class TodoList extends React.Component{
    render() {
    return(<ul>
      { this.props.list.map(list=>{
        return (<Todo list={list}/>)
      })
      }
      </ul>);
  }
  }
  export default TodoList;
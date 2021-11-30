import React from "react";
import Todo from './Todo';

class TodoList extends React.Component{
    render() {
    return(<ul>
      { this.props.list.map(list=>{
        return (<Todo key = {list.id} handleToggle={this.props.handleToggle} list={list}/>)
      })
      }
      </ul>);
  }
  }
  export default TodoList;
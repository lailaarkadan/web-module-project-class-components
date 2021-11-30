import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      list: [
        {
          task: 'Make coffe',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Do Laundry',
          id: 1528817077687,
          completed: false
        },
        {
          task: 'Go grocery shopping',
          id: 1528817077252,
          completed: false
        },
      ]
    }
  }
  
    handleAdd = (task) => {
      const newList={
      task: task,
      id: Date.now(),
     completed: false
      };
    
  

    
      this.setState({
      ...this.state,
      list: [...this.state.list, newList]
     });
}
    
  
    
   handleClear = () => {
    
    this.state({
      ...this.state,
      list: this.state.list.filter(list => {
        return (list.completed === false);
      })
    })
  }

  handleToggle = (clickId) => {
    
    
    this.setState({
      ...this.state,
      list: this.state.list.map(list=> {
        if (list.id === clickId) {
          return {
            ...list,
            completed:!list.completed
          }
        }
        return list;
  })
});
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <h2>Todos</h2>
       <TodoList handleToggle={this.handleToggle} list={list}/>
        
          <TodoForm handleAdd={this.handleAdd}/>
          
          
        <button onClick= {this.handleClear}>Clear</button>
      </div>
    );
    }
  }
    


export default App;

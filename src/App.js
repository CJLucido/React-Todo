import React from 'react';

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

const data = [
  {
    task: 'chip paint',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'sand chipped areas',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'find holes by sanded areas',
    id: 3,
    completed: false
  },
  {
    task: 'epoxy holes',
    id: 4,
    completed: false
  },
  {
    task: 'repaint',
    id: 5,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todos: data
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleToggle = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id){
          return {
            ...item,
            completed: !item.completed
          } 
        } else{
          return item;
        }
      })
    })
  }

  handleAddItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };


    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  handleClear = e => {
    e.preventDefault();
    console.log('it\'s also working!!!')
    
    this.setState({
      todos: this.state.todos.filter(item => {
       return  !item.completed 
      })
    })

    
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.handleAddItem} handleClear={this.handleClear}/>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;

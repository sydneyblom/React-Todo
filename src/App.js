import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



const tasksData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasksData,

    };

    // this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem = id => {
    console.log(id);

    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      complete: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  clearComplete = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.complete)
    });
  };

  render() {
    return (
      <div className="App">
        <h1>To do List</h1>
        <div className="header">

          <TodoForm addItem={this.addItem} />
    
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearComplete={this.clearComplete}
        />

<button className="clear-btn" onClick={this.clearComplete}>
        Clear Item
      </button>
      </div>
    );
  }
}

export default App;

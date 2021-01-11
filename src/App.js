import React, { PureComponent } from 'react';
import TodoList from './components/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'
import Footerinfo from './components/Footerinfo'
import './index.css'

const todoStatus = (listTodos = [], status = '', id) => {
  switch (status) {
    case 'ACTIVE':
      return listTodos.filter(item => !item.isCompleted)
    case 'COMPLETED':
      return listTodos.filter(item => item.isCompleted)
    case 'REMOVE':
      return listTodos.filter(item => item.id !== id)
    default:
      return listTodos
  }
}

const TodosLeft = (listTodos = []) => {
  return listTodos.filter(item => !item.isCompleted)
}

class App extends PureComponent {
  state = {
    listTodos: [],
    status: 'ALL',
  }

  addTodos = (todo = {}) => {
    this.setState(preState => ({
      listTodos: [...preState.listTodos, todo]
    }))
  }

  deleteTodo = (id = '') => {
    this.setState(prevState => ({
      listTodos: todoStatus(prevState.listTodos, 'REMOVE', id)
    }))
  }

  clearCompleted = () => {
    this.setState(preState => ({
      listTodos: TodosLeft(preState.listTodos)
    }))
  }

  CompletedTodos = (id = '') => {
    const { listTodos } = this.state
    const updatedTodos = listTodos.map(item => {
      if ((!item.isCompleted && item.id !== id) || (item.isCompleted && item.id === id)) {
      }
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    this.setState({ listTodos: updatedTodos
    })
  }

  render() {
    const { listTodos,status,} = this.state
    return (
      <>
      <div className="todoapp">
        <Header
          addTodo={this.addTodos}
        />
        <TodoList
          listTodos={todoStatus(listTodos, status)}
          CompletedTodos={this.CompletedTodos}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          activeButton={status}
          setStatusFilter={(status) => this.setState({ status })}
          clearCompleted={this.clearCompleted}
          TodosLeft={TodosLeft(listTodos).length}
          Todos={listTodos.length}
          Footerinfo={status}
        />
      </div>

       <Footerinfo/>
    </>
    );
  }
}

export default App;

import './App.css';
//import TodoList from './TodoList';
import React, { useState, useRef, useEffect } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Nav from './Nav';

//const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  /*
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  */
  return (
    <>
    <Router>
      <Nav className="nav">
      </Nav>
      <Routes>
        <Route path = "/" element={<Home/>} exact/>
        <Route path = "/portfolio" element={<Portfolio/>} exact/>
        <Route path = "/contact" element={<Contact/>} exact/>
      </Routes>
    </Router>
    </>
  );

  /*
  return (  
    <>
    <Router>
      <Routes>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/portfolio" component={Portfolio}/>
        <Route exact path = "/contact" component={Contact}/>
      </Routes>
    </Router>
    <div>
      <button>HOME</button> 
      <button>PORTFOLIO</button>
      <button>CONTACT</button>
    </div>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Completed</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
    );
    */
}

export default App;

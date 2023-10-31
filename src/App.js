import './App.css';
//import TodoList from './TodoList';
import React from 'react';
//import { v4 as uuidv4 } from 'uuid';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Nav from './Nav';

//const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  return (
    <>
    <HashRouter>
      <Nav className="nav">
      </Nav>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/portfolio" element={<Portfolio/>}/>
        <Route path = "/contact" element={<Contact/>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;

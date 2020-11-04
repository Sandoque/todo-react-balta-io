import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddTodo from './AddTodo';

//npm install react-router-dom @types/react-router-dom
//yarn add react-router-dom
//npm install react-hook-form yup @types/yup @hookform/resolvers

const App = () => {
  return (
    <TodoContext>
      <Router>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
          <Switch>
            <Route path="/create">
              <AddTodo></AddTodo>
            </Route>
            <Route path="/">
              <h4>Minha lista de tarefas</h4>
              <TodoList></TodoList>
            </Route>
          </Switch>
        </div>
      </Router>
    </TodoContext>
  );
}

export default App;

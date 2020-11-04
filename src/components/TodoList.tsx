import React, { useContext } from 'react';
import { Todo } from '../models/Todo';
import TodolistItem from './TodoListItem';
import { TodoContextType } from './../contexts/TodoContextType'
import { TodoContext } from '../contexts/TodoContext';


const Todolist = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);

  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        {
          todos?.map(
            todo => (<TodolistItem key={todo.id} todo={todo}></TodolistItem>)
          )

        }

      </tbody>

    </table>
  );
}

export default Todolist;
import React from 'react';
import { Todo } from '../models/Todo';
import TodolistItem from './TodoListItem';

const Todolist = () => {
  const todos: Todo[] = [

  ];
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
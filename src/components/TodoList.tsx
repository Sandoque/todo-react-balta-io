import React from 'react';
import { Todo } from '../models/Todo';
import TodolistItem from './TodoListItem';

const Todolist = () => {
  const todos: Todo[] = [
    { id: 1, title: 'ir ao supermercado', done: false },
    { id: 2, title: 'ir a barraca do bolo', done: false }
  ];
  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          todos?.map(
            todo => (<TodolistItem key={todo.id}></TodolistItem>)
          )

        }

      </tbody>

    </table>
  );
}

export default Todolist;
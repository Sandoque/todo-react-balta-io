import React from 'react';
import { Todo } from '../models/Todo';

const Todolist = () => {
  const todos: Todo[] = [
    { id: 1, title: 'ir ao supermercado', done: false },
    { id: 2, title: 'ir a barraca do bolo', done: false }
  ];
  return (<div>{todos[1].title}</div>);
}

export default Todolist;
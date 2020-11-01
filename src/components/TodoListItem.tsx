import React from 'react';
import { Todo } from './../models/Todo';

interface TodolistItemProps {
  todo: Todo;
}

const TodolistItem = (props: TodolistItemProps) => {

  const onRemove = (todo: Todo) => {
    console.log(todo);
  }

  const handleChange = () => {
    console.log('Mudou');
  };

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={props.todo.done}
            onChange={handleChange}
          />
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.todo)}
        ></button>
      </td>
    </tr>
  );
};

export default TodolistItem;

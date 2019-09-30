import React from 'react';
import Item from './Todo';

const TodoList = props => {
  return (
    <div className="task-list">
      {props.tasks.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}

    </div>
  );
};

export default TodoList;

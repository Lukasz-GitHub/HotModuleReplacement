import React from 'react';
import style from './TodoList.css';

const TodoList = props => (
    <ul className={style.TodoList}>
        {props.items.map(item => <li key={item.id} onClick={() => props.remove(item.id)}>{item.text}</li>)}
    </ul>
);

export default TodoList;

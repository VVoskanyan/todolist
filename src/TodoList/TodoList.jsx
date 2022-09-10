import React from 'react';
import { useSelector } from 'react-redux';
import { storeTodos } from '../redux/todoSlice';
import TodoItem from './TodoItem/TodoItem';

export default function TodoList(){
    const todos = useSelector(storeTodos);
    return(<div>
            {
            todos.map(val =>{
                return <TodoItem item = {val}
                    key = {Math.random()}
                />
            })
        }
    </div>
    )
}
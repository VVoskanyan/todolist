import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, storeTodos } from '../redux/todoSlice';
import styles from './TodoFooter.module.css';
export function TodoFooter(){
    const dispatch = useDispatch();
    const todos = useSelector(storeTodos);
    function clear(){
        dispatch(clearItems());
    }
    return(<div className ={styles.footerblock}>
        {todos.filter(val=>val.isComplited === true).length}/{todos.length} completed
        <button className = {styles.click} onClick = {clear}>clear</button>
    </div>)
}
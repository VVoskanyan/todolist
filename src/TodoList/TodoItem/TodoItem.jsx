import React from 'react';
import { useDispatch } from 'react-redux';
import { changeItem, deleteItem } from '../../redux/todoSlice';
import classes from './TodoItem.module.css';
export default function TodoItem({item}){
    const dispatch = useDispatch();
    function change(id){
        dispatch(changeItem(id));
    }
    function deleted(id){
        dispatch(deleteItem(id));
    }
    return(<div className={classes.itemblock}>
        <input type = "checkbox" defaultChecked = {item.isComplited}
        onChange = {()=>change(item.id)}/>
        <span>{item.text}</span>
        <button onClick = {()=>deleted(item.id)}>X</button>
    </div>)
}
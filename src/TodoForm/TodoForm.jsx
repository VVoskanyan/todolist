import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/todoSlice';
import styles from './TodoForm.module.css';
export default function TodoForm(){
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    function addItems(val){
        dispatch(addItem(val));
        setValue('');
    }
    return(<div className ={styles.formblock}>
        <input type ="text" value = {value} onChange = {(e)=>setValue(e.target.value)}/>
        <button onClick={()=>addItems(value)}>add</button>
    </div>)
}
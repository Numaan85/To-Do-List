import React, { useState } from 'react'
import Todoform from './Todoform'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import Editform from './Editform';
uuidv4();


const TodoWrapper = () => {
    const [todos,setTodos]= useState([])

    const addTodo= (todo)=>{
        setTodos([...todos,{id : uuidv4(), task: todo, completed: false, isEditing: false}])
    }

    const deleteTodo =(id)=>setTodos(todos.filter((todo)=> todo.id !==id));

    const toggleComplete = (id) =>{
        setTodos(
            todos.map((todo)=>
            todo.id===id?{...todo, completed: !todo.completed}: todo)
        )
    }

    const editTodo =(id)=>{
        setTodos(
            todos.map((todo)=> todo.id===id? {...todo, isEditing:!todo.isEditing}: todo)
        )
    }

    const editTask =(task, id)=>{
        setTodos(
            todos.map((todo)=>
            todo.id===id? {...todo,task,isEditing:!todo.isEditing}:todo)
        )
    }
  return (
    <div className='todo-wrapper'>
        <h1>Get Things Done!</h1>
        <Todoform addTodo={addTodo}/>
    {todos.map((todo)=> todo.isEditing ? (<Editform editTodo ={editTask} task={todo}/>):(<Todo key={todo.id} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete}/>))}
    
    </div>
  );
};

export default TodoWrapper
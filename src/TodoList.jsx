import React, { useState } from 'react'
import './App.css'

function TodoList() {

    const [task,setTask] = useState('');
    const [list,setList] = useState([]);

    const addTask = ()=>{
        if(task == '')
        {
         alert("Write something to add")
        }
        else
        {
            setList([...list,task])
            setTask('')
        }
       
    }

    const deleteList = (id) =>{
        const updateList = list.filter((value,key) => {
           return key != id;
        } )
        setList(updateList);
    }


  return (
    <>
    <div className=' container my-5'>
      <div className='box'>
      <div className='h1 text-white text-align-center'>TodoList</div>
        <div className='Search'>
            <input type="text" placeholder='Add Anything' id='input-box' value={task} 
            onChange={(e)=>setTask(e.target.value)}/>
            <button id='btn' onClick={addTask}>Add</button>
            <ul id='list-container'>
                {
                    list.map((value,key)=>{
                        return(
                            <li>{value} <button id='btn-del' onClick={()=>deleteList(key)}>delete</button></li>
                        )

                    })
                }
        </ul>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default TodoList

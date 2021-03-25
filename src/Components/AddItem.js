import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./additem.css"


function AddItem ({addItem}){

    const handleSubmit = (e)=>{
        e.preventDefault();
        let item ={
            id:uuidv4(),
            description: document.getElementById('todo').value,
            duedate: document.getElementById('due-date').value,
        } 
        addItem(item);
    
    }
    
    
    return(
      <div className="form">
        <input id = 'todo' type ="text" placeholder="Enter your to-do activity"/>
       <br/>
        Due Date: <input id='due-date' type ='date'/>
        <br/>
        <button className='bg-primary' onClick={handleSubmit}>ADD</button>
      </div>
    );
}

export default AddItem;

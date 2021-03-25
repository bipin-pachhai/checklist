import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddItem from './Components/AddItem';
import Checklist from './Components/Checklist';

const App = ()=> {

  const [checklistItems, setChecklistItems] = useState([]);

  //adding item to the checklist
  const addToCheckList =  (item)=>{
     setChecklistItems([...checklistItems, item]);

  }
 //remove from checklist
  const removeFromCheckList = removeid =>{
    setChecklistItems(checklistItems.filter(item => item.id !== removeid));
    console.log(checklistItems);
  }

  useEffect(()=>{
    const availableItems = localStorage.getItem("checklist");
    if(availableItems){
      setChecklistItems(JSON.parse(availableItems));
    }
  },[]); 


useEffect(()=>{
     localStorage.setItem("checklist", JSON.stringify(checklistItems));  
                },[checklistItems]);

  return (
     <div className="App">
      <h1 className= "navbar bg-primary"> Your CheckList</h1>
      <div className='notification-bar bg-info'>
        CheckList Summary: You have {checklistItems.length} tasks remaining.
      </div>
      <div className='row'>
      <div className="col-4">
       <AddItem addItem = {addToCheckList}/>
       </div>
      <div className="col-8">
      <Checklist checklistItems ={checklistItems} removeItem = {removeFromCheckList}/>
      </div>
      </div> 
     
    </div>
  );
}

export default App;

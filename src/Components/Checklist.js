import React from 'react';

const Checklist = ({checklistItems,removeItem })=>{
    const remove = id=>{
        removeItem(id);
        document.getElementById(id).remove();
    }
    
    return(
        <div>
            <ul id = 'checklist'>
                {
                checklistItems.map( listItem =>{
                        if(!document.getElementById(listItem.id)){
                        let list = document.createElement('li');
                        list.id = listItem.id;
                        list.innerHTML = `<div>
                                          <strong>${listItem.description}</strong><br/>
                                          <span><strong>Due Date:</strong> ${listItem.duedate}</span>
                                          <button class="bg-danger" id = "btn+${listItem.id}" > Remove</button>
                                          </div>`;
                          document.getElementById('checklist').appendChild(list);
                          document.getElementById(`btn+${listItem.id}`).addEventListener('click', ()=>{
                            remove(listItem.id)
                          })    
                    }
                    })
                }
            </ul>
        </div>

    )
}

export default Checklist;
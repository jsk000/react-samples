import { computeHeadingLevel } from '@testing-library/react';
import React, { useRef } from 'react';
import { useState } from 'react';



const ToDo = ( ) => {
    const [todos, setTodos] = useState([]);

    const inputRef = useRef();

    const handleAddTodo = () => {
        const text = inputRef.current.value;
        const newItem  = { completed: false, text};
        if(text !== "") {
            setTodos([...todos, newItem]);
            inputRef.current.value = "";
        }
        
        
    }
    const handleItemDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    const handleDeleteItem = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const handleKeyPress = (event) => {
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
          handleAddTodo()
        }
      }

    const handleResetList = () => {
        setTodos([]);
    }

    return(
        <div>
            <h3><u> 7. To-Do List: </u></h3>

            <p>
                1. Enter your tasks <br />
                2. Mark your completed task <br />
                3. Delete the task when needed <br />
                4. Reset the list
            </p>
            <input className='input-field'  onKeyDown={handleKeyPress} ref={inputRef} placeholder='Enter Task' required/>
            <button className='submit-button' onClick={handleAddTodo}>Add</button>
            <button className='alert-button' onClick={handleResetList}>Reset</button>

            <div className='task-container '>
                <ul>
                {todos.map(({text, completed}, index) => {
                    return(
                        <div className="item">
                            <li
                            className={completed ? "done" : ""}
                            key={index}
                            onClick={() => handleItemDone(index)}
                            >
                            {text}
                            </li>
                            <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
                        </div>
                    ); 
                })}
                
                </ul>
            </div>
            
        
            <hr/>
        </div>

        
    )
}

export default ToDo;
import React,{useState} from 'react'
import { FaRegHandPointDown, FaHandPointUp } from "react-icons/fa";


const ToDoList = () => {

    const [tasks,setTaske] = useState(["naimul","hasan","bappy","and i am from cumilla"]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){

    }
    
    function EditTask(index){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function MovetaskDown(index){

    }

  return (
    <div>
        <h1>To-Do-List</h1>

        <div>
            <input 
                type="text"
                placeholder='Enter a name'
                value={newTask}
                onChange={handleInputChange}
                />
                <button
                    className='' 
                    onClick={addTask}>
                    add
                </button>
        </div>
        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
                <span className=''>{task}</span><br />
                <span>{task}</span>
                <button className='' onClick={() => EditTask(index)}>
                    Edit
                </button>
                <button className='' onClick={() => deleteTask(index)}>
                    Delete
                </button>
                <button className='' onClick={() => moveTaskUp(index)}>
                <FaHandPointUp />
                </button>
                <button className='' onClick={() => MovetaskDown(index)}>
                <FaRegHandPointDown />
                </button>
            </li>
            )}
        </ol>
    </div>
  )
}

export default ToDoList
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";


const ToDoList = () => {
// "hasan","bappy","and i am from cumilla"
    const [tasks,setTaske] = useState([]);
    const [newTask,setNewTask] = useState("");
    const [feedback,setFeedback] = useState("");
    const [increment,setIncrement] = useState(0);
    const [dislike,setdislike] = useState(0);

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function handleTextareachange(e){
        setFeedback(e.target.value);
    }

    function addTask(){

        const object = {new:newTask,
                        fee:feedback,
                        likes: increment,
                        dislikes: dislike
        }

        if(newTask,feedback.trim() !== "")
        setTaske(t => [...t,object]);
        setNewTask("");
        setFeedback("");
        
    }
    
    function EditTask(index) {
        const updatedName = prompt("Edit Task Name:", tasks[index].new);
        const updatedFeedback = prompt("Edit Feedback:", tasks[index].fee);
    
        if (updatedName !== null && updatedFeedback !== null) {
            setTaske(prevTasks => {
                const updatedTasks = [...prevTasks]; 
                updatedTasks[index] = { 
                    new: updatedName, 
                    fee: updatedFeedback 
                };
                return updatedTasks;
            });
        }
    }
    


    function likePost(index) {
        setTaske((prev) =>
            prev.map((task, i) =>
                i === index ? { ...task, likes: task.likes + 1 } : task
            )
        );
    }

    function dislikePost(index) {
        setTaske((prev) =>
            prev.map((task, i) =>
                i === index ? { ...task, dislikes: task.dislikes + 1 } : task
            )
        );
    }


  return (
    <div className='font-sans pl-8'>
        <h1 className='text-5xl font-bold py-10 text-[#e0e1dd]'>To-Do-List</h1>

        <div>
            <input 
                type="text"
                className='text-2xl border-2 bg-white p-1 rounded mb-4 w-80'
                placeholder='Enter a name'
                value={newTask}
                onChange={handleInputChange}
                /><br/>
                <textarea 
                    placeholder='feedback'
                    rows={2}
                    cols={40}
                    className='text-2xl border-2 bg-white p-1 rounded'
                    value={feedback} 
                    onChange={handleTextareachange}>
                </textarea><br />
                <button
                    className='py-2 px-10 rounded-lg text-lg my-10 bg-gray-500 hover:bg-gray-800 text-white cursor-pointer' 
                    onClick={addTask}>
                    Add
                </button>
        </div>
        <ol className='flex flex-wrap gap-4'>
            {tasks.map((task,index) => 
            <li key={index} className='px-6 py-6 bg-[#e0e1dd] rounded'>

                <span className='text-2xl font-semibold block'>{task.new}</span>
                <i><p className='py-5 text-base text-gray-600'>{task.fee}</p></i>

                <div className="flex gap-3">
                <button className='py-0.5 px-5 rounded text-lg bg-[#415a77] text-[#e0e1dd] cursor-pointer hover:bg-gray-900' onClick={() => EditTask(index)}>
                    Edit
                </button>
                <button className='py-0.5 px-5 rounded text-lg bg-[#e63946] hover:bg-red-600 text-white cursor-pointer' onClick={() => deleteTask(index)}>
                    Delete
                </button>
                <p>{task.likes}</p>
                <button className='text-3xl hover:text-blue-800' onClick={() => likePost(index)}>
                <GrLike />
                </button>
                <p>{task.dislikes}</p>
                <button className='text-3xl hover:text-pink-700' onClick={() => dislikePost(index)}>
                <GrDislike />
                </button>
                </div>
            </li>
            )}
        </ol>
    </div>
  )
}

export default ToDoList
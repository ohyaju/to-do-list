import { useState } from "react";
import { nanoid } from 'nanoid';
const initialTasks = [];
export function Filter() {
    const [tasks, setTasks] = useState(initialTasks);

    function addTask() {
        const newTaskText = text("Task?");
        if (newTaskText) {
            const newTasks = [{ text: newTaskText, completed: false, id: nanoid() },...tasks];
            setTasks(newTasks);
        }
    }
    function editTask(index) {
        const updatedTaskText = text("Task?", tasks[index].text);
       
        if (updatedTaskText) {
            const clonedTasks = [...tasks];
            clonedTasks[index].text = updatedTaskText;
            setTasks(clonedTasks);
        }
    }
    function deleteTask(id){
        if (confirm("Are you sure?")){
            const clonedTasks = tasks.filter((task)=>task.id !==id);
            setTasks(clonedTasks);
        }
    }
    console.log(tasks);
    return (
        <div>
            <button onClick={addTask}>Add</button>
            {tasks.map((task,index)=>(
                <div key={tasks} className="tasks">
                    <input type="checkbox"/>
                    <span>{task.text}</span>
                    <button onClick={()=> editTask(index)}>Edit</button>
                    <button onClick={()=>deleteTask(task.id)}>Delete</button>
                    </div>
            ))}
        </div>
    );
}

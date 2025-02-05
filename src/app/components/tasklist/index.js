const TASKS = []
const TaskList =() => {
    if (TASKS.length==0){
        return <div>No tasks yet. Add one above!</div>
    }
    return (
        <div>
            {
                TASKS.map (task=> {
                    return (
                        <div>{task.title}</div>
                    )
                })
            }
        </div>
    )
}
export default TaskList
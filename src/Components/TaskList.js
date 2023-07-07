import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, onUpdate }) {
    return (<div className="taskList">
        {tasks.map((task, index) => {
            return (
                <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate} />
            )
        })}
    </div>);
}

export default TaskList;
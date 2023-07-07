import { useState } from 'react';

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
    const [title, setTitle] = useState(task ? task.title : '')

    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskFormUpdate) {
            onUpdate(task.id, title, taskDesc);
        }
        else {
            onCreate(title, taskDesc);
        }
        setTitle('');
        setTaskDesc('');
    }
    return (
        <div>
            {taskFormUpdate ? <div className='taskUpdate'>
                <h3>Lütfen Taskı Düzenleyiniz!</h3>
                <form className='taskForm'>
                    <label className='label'>Başlığı Düzenleyiniz</label>
                    <input value={title} onChange={handleChange} className='taskInput' />
                    <label className='label'>Taskı Düzenleyiniz</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className='taskInput' rows='5' />
                    <button className='button taskUpdateButton' onClick={handleSubmit}>Düzenle</button>

                </form>
            </div> :
                <div className='taskCreate'>
                    <h3>Lütfen Task Ekleyiniz!</h3>
                    <form className='taskForm'>
                        <label className='label'>Başlık</label>
                        <input value={title} onChange={handleChange} className='taskInput' />
                        <label className='label'>Task Giriniz</label>
                        <textarea value={taskDesc} onChange={handleTaskChange} className='taskInput' rows='5' />
                        <button className='button' onClick={handleSubmit}>Oluştur</button>

                    </form>
                </div>}

        </div>
    );
}

export default TaskCreate;
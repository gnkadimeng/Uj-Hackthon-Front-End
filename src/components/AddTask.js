import { useState } from 'react'
import { ProjectForm } from './projectForm/ProjectForm'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [notification, setNotification] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, notification })

        setText('')
        setDay('')
        setNotification('true')
    }

    return (
        <ProjectForm />

        // <form className="add-form" onSubmit={onSubmit}>
        //     <div className="form-control">
        //         <label>Task</label>
        //         <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
        //     </div>
        //     <div className="form-control">
        //         <label>Start Date and Time</label>
        //         <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}/>
        //     </div>
        //     <div className="form-control">
        //         <label>Team Member</label>
        //         <input type='text' placeholder='Add Team Member' value={text} onChange={(e) => setText(e.target.value)}/>
        //     </div>
        //     <div className="form-control">
        //         <label>Due Date</label>
        //         <input type='text' placeholder='Add Due Date' value={day} onChange={(e) => setDay(e.target.value)}/>
        //     </div>
        //     <div className="form-control">
        //         <label>Send Notification</label>
        //         <input type='checkbox'
        //         checked={true} value={notification} onChange={(e) => setNotification(e.currentTarget.checked)} />
        //     </div>

        //     <input type='submit' value='Save Task' className="btn"/>
        // </form>
    )
}

export default AddTask

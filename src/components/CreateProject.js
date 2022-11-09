import { useState } from 'react'

const CreateProject = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [notification, setNotification] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Create a Project')
            return
        }

        onAdd({ text, day, notification })

        setText('')
        setDay('')
        setNotification('true')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Project Name</label>
                <input type='text' placeholder='Create Project' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Start Date and Time</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Team Leader</label>
                <input type='text' placeholder='Add Leader Team' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <textarea>
                <label>Project Description</label>
                    Project description
                </textarea>
            </div>
            <div className="form-control">
                <label>Send Notification</label>
                <input type='checkbox'
                    checked={true} value={notification} onChange={(e) => setNotification(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Create Project' className="btn" />
        </form>
    )
}

export default CreateProject

import axios from "axios";
import { useEffect, useState } from "react";

export const TaskForm = ({ projectId }) => {
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endtDate, setEndtDate] = useState('');
    const [userId, setUserId] = useState(0);

    const [members, setMembers] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/api/view/team/leaders').then(res => {
            setMembers(res.data.members);
        })
    }, [])

    const onCreateTask = () => {
        console.log(userId);
        // const userId = Number(userId);
        axios.post('http://localhost:5000/api/create/task', {
            project_id: projectId,
            user_id: userId,
            task_name: taskName,
            start_date: startDate,
            end_date: endtDate
        }).then(res => {
            console.log(res.data);
        })
    }

    console.log(userId);

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Task Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label htmlFor="full_name">Task Name</label>
                                        <input type="text" onChange={(e) => setTaskName(e.target.value)} name="taskName" id="full_name" placeholder="Task Name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="full_name">Assign Team Leader:</label>
                                        <select name="cars" id="cars" onChange={(e) => setUserId(e.target.value)}>
                                            {members.map(member => (
                                                <option key={member.id} value={member.id}>{member.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="city">Start Date</label>
                                        <input type="text" name="city" id="city" onChange={(e) => setStartDate(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="city">End Date</label>
                                        <input type="text" name="city" id="city" onChange={(e) => setEndtDate(e.target.value)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>


                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex items-end">
                                            <button onClick={onCreateTask} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Project</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
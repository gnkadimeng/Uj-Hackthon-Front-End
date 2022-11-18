import { NavLink } from "react-router-dom";

export const CreateSubtaskButton = () => (
    <NavLink to='/create/task'>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Task</button>
    </NavLink>
)
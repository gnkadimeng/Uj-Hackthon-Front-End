import { NavLink } from "react-router-dom";

export const CreateProjectButton = () => { 
    return(
        <div className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <NavLink to='/create/project'>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Project</button>
        </NavLink>
    </div>
    );
}
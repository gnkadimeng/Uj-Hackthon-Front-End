import { NavLink } from "react-router-dom";

export const BackButton = () => (
    <div className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
        <NavLink to='/'>
            <button className="h-8 px-3 rounded-md shadow text-white bg-[#0f172a]">Back to tasks</button>
        </NavLink>
    </div>
)
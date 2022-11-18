import { NavLink } from "react-router-dom";

export const SubtaskRows = ({ subtaskName, startDate, endDate, subtaskId }) => {
    return (
        <>
            <tr>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center">
                        <svg viewBox="0 0 24 24" className="w-4 mr-5 text-gray-400" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                            <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                        {subtaskName}
                    </div>
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center">
                        {/* <UserProfile userId={task.user_id} /> */}
                    </div>
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{startDate}</td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{endDate}</td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">
                    <NavLink to={`/subtask/info/${subtaskId}`}>
                        <button className="inline-flex items-center px-4 py-2 bg-[#365314] hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                          
                            Edit subtask
                        </button>
                    </NavLink>
                </td>
            </tr>
        </>
    );
}
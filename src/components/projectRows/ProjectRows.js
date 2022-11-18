import { NavLink } from "react-router-dom";

export const ProjectRows = ({ taskName, startDate, endDate, taskId }) => {
    return (
        <>
            <tr>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center">
                        <svg viewBox="0 0 24 24" className="w-4 mr-5 text-gray-400" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                            <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                        {taskName}
                    </div>
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                    {/* <div className="flex items-center">
                        <UserProfile userId={task.user_id} />
                    </div> */}
                </td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{startDate}</td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{endDate}</td>
                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">

                    <NavLink to={`/subtask/${taskId}`}>
                        <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                            </svg>
                            View
                        </button>
                    </NavLink>
                </td>
            </tr>

        </>
    );
}
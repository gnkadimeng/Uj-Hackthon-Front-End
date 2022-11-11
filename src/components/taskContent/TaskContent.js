import AddTask from "../AddTask";
import { UserProfile } from "../userProfile/UserProfile";


export const TaskContent = () => {

    const renderTasks = () => {
        return (
            <div className="sm:p-7 p-4">
                <div className="flex w-full items-center mb-7">
                    <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                        <svg viewBox="0 0 24 24" className="w-4 mr-2 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Last 30 days
                        <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    {/* <AddTask /> */}
                    <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                        Filter by
                        <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                        <span className="mr-3">Page 2 of 4</span>
                        <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                            <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                            <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400">
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Task Name</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Team Leader</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Start Date</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Due Date</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-100">
                        <tr>
                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center">
                                    <svg viewBox="0 0 24 24" className="w-4 mr-5 text-gray-400" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                        <line x1="1" y1="10" x2="23" y2="10"></line>
                                    </svg>
                                    Task 1
                                </div>
                            </td>
                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center">
                                    <UserProfile />
                                </div>
                            </td>
                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Wed</td>
                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">Fri</td>
                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">

                                <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                    </svg>

                                    View
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }

    
    return (
        {renderTasks}
    );
}
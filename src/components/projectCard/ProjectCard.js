import { NavLink } from "react-router-dom";

export const ProjectCard = ({ projectName, projectId }) => {
    return (
        <NavLink to={`/project/${projectId}`} className="bg-[#cbd5e1] p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
            <button >
                <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                    {projectName}
                </div>
                <div className="flex items-center w-full">
                    <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Design</div>
                </div>
            </button>
        </NavLink>

    );
}
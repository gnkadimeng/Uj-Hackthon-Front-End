import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { fetchTaskskAPi } from "../../fetchers/fetchTasksApi";
import { CreateTaskButton } from "../CreateTaskButton";
import { Loader } from "../Loader";
import { ProjectRows } from "../projectRows/ProjectRows";

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const { projectId } = useParams();
    const history = useNavigate();

    const fetchTasks = async () => {
        fetchTaskskAPi(projectId).then(data => {
            setTasks(data.tasks);
        })
    }


    useEffect(() => {
        fetchTasks();
    }, [history])


    return (
        tasks.length > 0 ?
            <div className="sm:p-7 p-4">
                <div className="flex w-full items-center mb-4">
                    <CreateTaskButton />

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
                        {
                            tasks.map(task => (
                                <ProjectRows
                                    key={task.id}
                                    taskName={task.task_name}
                                    startDate={task.start_date}
                                    endDate={task.end_date}
                                    taskId={task.id}
                                />
                            ))
                        }
                    </tbody>
                </table>

            </div>
            :
            <Loader status={'Fetching tasks'} />
    );
}
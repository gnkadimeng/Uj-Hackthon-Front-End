import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSubtasksApi } from "../../fetchers/fetchSubtasksApi";
import { CreateSubtaskButton } from "../CreateSubtaskButton";
import { Loader } from "../Loader";
import { SubtaskRows } from "../SubtaskRows";

export const Subtasks = () => {
    const [subtasks, setSubtasks] = useState([]);
    const { taskId } = useParams();

    const fetchSubtasks = () => {
        FetchSubtasksApi(taskId).then(data => {
            console.log(data);
            setSubtasks(data);
        })
    }

    useEffect(() => {
        fetchSubtasks();
    }, [])

    return (

        subtasks.length > 0 ?
            <>
                <div className="flex w-full items-center mb-4">
                    <CreateSubtaskButton />
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400">
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Sub Task Name</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Team Member</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Start Date</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Due Date</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-100">
                        {subtasks.map(task => (
                            <SubtaskRows
                                key={task.id}
                                subtaskName={task.sub_task_name}
                                startDate={task.start_date}
                                endDate={task.end_date}
                                subtaskId={task.id}
                            />
                        ))}
                    </tbody>
                </table>
            </>
            :
            <Loader status={'Fetching subtasks'} />
    );
}
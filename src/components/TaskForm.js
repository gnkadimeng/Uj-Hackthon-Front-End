import { useEffect, useState } from "react";
import { createTaskApi } from "../api/createTaskApi";
import { fetchProjectsApi } from "../fetchers/fetchProjectsApi";
import { fetchTeamLeadersApi } from "../fetchers/fetchTeamLeadersApi";
import Auth from "../util/Auth";

export const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [project, setProject] = useState();
    const [teamLeader, setTeamLeader] = useState();

    // select dropdown data
    const [teamLeaders, setTeamLeaders] = useState([]);
    const [projects, setProjects] = useState([])


    const fectTeamLeaders = () => {
        fetchTeamLeadersApi().then(data => {
            setTeamLeaders(data);
        });
    }

    const fetchProjects = () => {
        fetchProjectsApi().then(data => {
            setProjects(data)
        })
    }


    const onSubmit = () => {
        console.log(startDate, endDate);
        createTaskApi({
            project_id: 1,
            user_id: Auth.getClientId(),
            task_name: taskName,
            start_date: startDate,
            end_date: endDate
        }).then(data => {
            console.log(data);
        })
    }


    useEffect(() => {
        fectTeamLeaders();
        fetchProjects();
    }, [])

    
    return (
        <>
            <div className="flex items-center justify-center p-12">

                <div className="mx-auto w-full max-w-[550px]">
                    < >
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="fName"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Task Name
                                    </label>
                                    <input
                                        onChange={(e) => setTaskName(e.target.value)}
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder={`Task Name`}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Choose Project</label>
                                <select onChange={(e) => setProject(e.target.value)} id="country" name="country" autoComplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                    <option>Select project</option>
                                    {projects.map(leader => (
                                        <option value={leader.id} key={leader.id}>{leader.project_name}</option>
                                    ))}
                                </select>
                            </div>


                            <div className="w-full px-3 sm:w-1/2">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Choose Team Leader</label>
                                <select onChange={(e) => setTeamLeader(e.target.value)} required id="country" name="country" autoComplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                    <option>Select leader</option>
                                    {teamLeaders.map(leader => (
                                        <option value={leader.id} key={leader.id}>{leader.name}</option>
                                    ))}
                                </select>
                            </div>

                        </div>




                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="date"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        onChange={(e) => setStartDate(e.target.value)}
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="date"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        End Date
                                    </label>
                                    <input
                                        onChange={(e) => setEndDate(e.target.value)}
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={onSubmit}
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Create Task
                            </button>
                        </div>
                    </>
                </div>

            </div>
            {/* <EventAlert
                isAlert={showAlert}
                alertType={alertType}
                message={alertMessage}
            /> */}
        </>
    );
}